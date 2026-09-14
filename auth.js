// ==========================================
// AUTHENTICATION & SESSION MANAGEMENT
// ==========================================
//
// Client-side authentication using localStorage:
// - Stores registered accounts in 'starr.users.v1'
// - Stores active session in 'starr.session.v1'
// - Handles signup, login, social/demo login, logout, and UI profile syncing
//

(function () {
    const USERS_KEY = "starr.users.v1";
    const SESSION_KEY = "starr.session.v1";

    // Default demo users if none exist yet
    const DEFAULT_USERS = {
        "akshaj": {
            username: "Akshaj",
            email: "akshaj@initiative.edu",
            password: "password123",
            grade: "Grade 11 Student",
            avatarColor: "#556EE6"
        },
        "demo": {
            username: "Demo Student",
            email: "student@initiative.edu",
            password: "demo",
            grade: "Grade 12 Student",
            avatarColor: "#10B981"
        }
    };

    function loadUsers() {
        try {
            const raw = localStorage.getItem(USERS_KEY);
            if (!raw) {
                localStorage.setItem(USERS_KEY, JSON.stringify(DEFAULT_USERS));
                return { ...DEFAULT_USERS };
            }
            return JSON.parse(raw);
        } catch (e) {
            return { ...DEFAULT_USERS };
        }
    }

    function saveUsers(users) {
        try {
            localStorage.setItem(USERS_KEY, JSON.stringify(users));
        } catch (e) {
            console.error("Failed to save users to localStorage:", e);
        }
    }

    const Auth = {
        getUsers() {
            return loadUsers();
        },

        getCurrentUser() {
            try {
                const raw = localStorage.getItem(SESSION_KEY);
                if (raw) {
                    const session = JSON.parse(raw);
                    const users = loadUsers();
                    const userKey = session.username?.toLowerCase();
                    if (users[userKey]) {
                        return users[userKey];
                    }
                    return session; // return stored session obj if user was created on the fly
                }
            } catch (e) {
                console.error("Error reading session:", e);
            }
            // Return default Akshaj account as fallback so existing views don't break
            return {
                username: "Akshaj",
                email: "akshaj@initiative.edu",
                grade: "Grade 11 Student",
                avatarColor: "#556EE6"
            };
        },

        isLoggedIn() {
            try {
                return !!localStorage.getItem(SESSION_KEY);
            } catch (e) {
                return false;
            }
        },

        login(username, password) {
            if (!username || !password) {
                return { success: false, message: "Please enter both username and password." };
            }

            const users = loadUsers();
            const key = username.trim().toLowerCase();
            const user = users[key];

            if (!user || user.password !== password) {
                return { success: false, message: "Invalid username or password. Please try again." };
            }

            // Save active session
            const sessionData = {
                username: user.username,
                email: user.email,
                grade: user.grade || "Student Account",
                loggedInAt: Date.now()
            };

            try {
                localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
            } catch (e) {
                console.error("Failed to save session:", e);
            }

            return { success: true, user };
        },

        signup(username, password, email = "") {
            const cleanUser = username ? username.trim() : "";
            if (!cleanUser || cleanUser.length < 3) {
                return { success: false, message: "Username must be at least 3 characters long." };
            }

            if (!password || password.length < 4) {
                return { success: false, message: "Password must be at least 4 characters long." };
            }

            const users = loadUsers();
            const key = cleanUser.toLowerCase();

            if (users[key]) {
                return { success: false, message: "An account with this username already exists." };
            }

            // Pick an avatar accent color based on username
            const colors = ["#556EE6", "#10B981", "#8B5CF6", "#F59E0B", "#EC4899", "#3B82F6"];
            const chosenColor = colors[Math.abs(cleanUser.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)) % colors.length];

            const newUser = {
                username: cleanUser,
                email: email ? email.trim() : `${cleanUser.toLowerCase()}@initiative.edu`,
                password: password,
                grade: "Student Account",
                avatarColor: chosenColor,
                createdAt: Date.now()
            };

            users[key] = newUser;
            saveUsers(users);

            // Auto log in after signup
            this.login(cleanUser, password);

            return { success: true, user: newUser };
        },

        loginSocial(provider) {
            // Simulated OAuth sign-in with provider
            const nameMap = {
                google: "Google Student",
                microsoft: "Microsoft Learner",
                yahoo: "Yahoo Scholar",
                guest: "Guest Explorer"
            };

            const cleanName = nameMap[provider.toLowerCase()] || `${provider} User`;
            const users = loadUsers();
            const key = cleanName.toLowerCase();

            if (!users[key]) {
                users[key] = {
                    username: cleanName,
                    email: `${provider.toLowerCase()}.student@initiative.edu`,
                    password: "social-login",
                    grade: "Student Account",
                    avatarColor: "#4F46E5",
                    provider: provider
                };
                saveUsers(users);
            }

            const sessionData = {
                username: users[key].username,
                email: users[key].email,
                grade: users[key].grade,
                avatarColor: users[key].avatarColor,
                loggedInAt: Date.now(),
                provider: provider
            };

            localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
            return { success: true, user: users[key] };
        },

        logout() {
            try {
                localStorage.removeItem(SESSION_KEY);
            } catch (e) {
                console.error("Failed to clear session:", e);
            }
            window.location.href = "login.html";
        },

        // Update profile cards across the site
        initUI() {
            const user = this.getCurrentUser();
            if (!user) return;

            // 1. Update Profile Card in sidebar / dashboard
            const profileCards = document.querySelectorAll(".profile-card");
            profileCards.forEach(card => {
                const nameEl = card.querySelector("h3");
                const roleEl = card.querySelector("p");
                const avatarEl = card.querySelector(".avatar");

                if (nameEl) nameEl.textContent = user.username;
                if (roleEl) roleEl.textContent = user.grade || "Student Account";

                if (avatarEl) {
                    const initials = user.username.charAt(0).toUpperCase();
                    avatarEl.title = `Logged in as ${user.username}`;
                }

                // Add quick logout button if not already added
                if (!card.querySelector(".logout-btn-mini")) {
                    const logoutBtn = document.createElement("button");
                    logoutBtn.className = "logout-btn-mini";
                    logoutBtn.title = "Log Out";
                    logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
                    logoutBtn.setAttribute("aria-label", "Log out of account");
                    logoutBtn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        if (confirm(`Log out of ${user.username}?`)) {
                            Auth.logout();
                        }
                    });
                    card.appendChild(logoutBtn);
                }
            });

            // 2. Update Welcome Banner (Dashboard)
            const bannerTitle = document.querySelector(".welcome-banner .overlay h1");
            if (bannerTitle && user.username) {
                bannerTitle.textContent = `Welcome back, ${user.username}!`;
            }
        }
    };

    window.Auth = Auth;

    // Run UI init when DOM is loaded
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => Auth.initUI());
    } else {
        Auth.initUI();
    }
})();

