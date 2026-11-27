// Firebase Authentication facade used by the existing site pages.
(function () {
  const auth = window.firebaseAuth;
  if (!auth) {
    console.error("Firebase Auth did not initialize. Check the Firebase SDK scripts.");
    return;
  }

  function currentUser() {
    const user = auth.currentUser;
    return user ? {
      uid: user.uid,
      username: user.displayName || (user.email || "").split("@")[0] || "Student",
      email: user.email || "",
      grade: "Student Account",
      avatarColor: "#556EE6",
      photoURL: user.photoURL || ""
    } : null;
  }

  const Auth = {
    getCurrentUser: currentUser,
    isLoggedIn: () => !!auth.currentUser,
    async loginSocial(provider = "Google") {
      if (provider !== "Google") return { success: false, message: "Please use Continue with Google." };
      try {
        const credential = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        return { success: true, user: currentUser(), credential };
      } catch (error) {
        console.error("Google sign-in failed", error);
        return { success: false, message: error.message || "Google sign-in failed." };
      }
    },
    async login() { return { success: false, message: "Use Continue with Google to sign in." }; },
    async signup() { return { success: false, message: "Use Continue with Google to create an account." }; },
    async logout() {
      await auth.signOut();
      window.location.href = "login.html";
    },
    requireUser() {
      auth.onAuthStateChanged(user => {
        if (!user && !location.pathname.endsWith("login.html") && !location.pathname.endsWith("signup.html")) {
          location.replace("login.html");
        } else if (user) this.initUI();
      });
    },
    initUI() {
      const user = currentUser();
      if (!user) return;
      document.querySelectorAll(".profile-card").forEach(card => {
        const name = card.querySelector("h3");
        const role = card.querySelector("p");
        if (name) name.textContent = user.username;
        if (role) role.textContent = user.grade;
        let button = card.querySelector(".logout-btn-mini");
        if (!button) {
          button = document.createElement("button");
          button.type = "button";
          button.className = "logout-btn-mini";
          button.textContent = "Log out";
          button.addEventListener("click", () => this.logout());
          card.appendChild(button);
        }
      });
      document.querySelectorAll("[data-auth-name]").forEach(name => {
        name.textContent = user.username;
      });
      const title = document.querySelector(".welcome-banner .overlay h1");
      if (title) title.textContent = `Welcome back, ${user.username}!`;
    }
  };

  window.Auth = Auth;
  document.addEventListener("DOMContentLoaded", () => {
    const googleButton = document.querySelector('.social-btn[data-provider="Google"]');
    if (googleButton) {
      googleButton.querySelector("span:last-child")?.replaceChildren(document.createTextNode("Continue with Google"));
      googleButton.addEventListener("click", async event => {
        event.preventDefault();
        event.stopImmediatePropagation();
        const result = await Auth.loginSocial("Google");
        if (!result.success) {
          const errorBox = document.getElementById("auth-error");
          if (errorBox) {
            errorBox.textContent = result.message;
            errorBox.style.display = "block";
          } else alert(result.message);
        } else {
          location.href = "dashboard.html";
        }
      }, true);
    }
    document.querySelectorAll('.social-btn:not([data-provider="Google"]), #login-form, #signup-form, #demo-login-btn, #forgot-password-link, .divider')
      .forEach(element => { element.hidden = true; element.style.display = "none"; });
    const modal = document.getElementById("oauth-modal");
    if (modal) { modal.hidden = true; modal.style.display = "none"; }
  });
  auth.onAuthStateChanged(user => {
    if (user) {
      Auth.initUI();
      if (location.pathname.endsWith("login.html") || location.pathname.endsWith("signup.html")) {
        location.replace("dashboard.html");
      }
    } else if (location.pathname.endsWith("dashboard.html") || location.pathname.endsWith("course_content.html")) {
      Auth.requireUser();
    }
  });
})();
