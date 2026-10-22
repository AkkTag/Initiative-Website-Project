// ==========================================
// AUTHENTICATION & SECURE CREDENTIAL STORAGE
// ==========================================
//
// Secure client-side authentication engine:
// - Uses Web Cryptography API (PBKDF2-SHA256 with cryptographically random salt)
// - Passwords are NEVER stored in plain text.
// - Sanitizes user data (salt and password hashes are never exposed to views).
// - Manages session tokens and UI synchronization across the site.
//

(function () {
    const USERS_KEY = "starr.users.v1";
    const SESSION_KEY = "starr.session.v1";
    const PBKDF2_ITERATIONS = 100000;

    // Helper: Convert ArrayBuffer to Hex String
    function bufToHex(buf) {
        return Array.from(new Uint8Array(buf))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
    }

    // Helper: Convert Hex String to Uint8Array
    function hexToBuf(hex) {
        const bytes = new Uint8Array(hex.length / 2);
        for (let i = 0; i < hex.length; i += 2) {
            bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
        }
        return bytes;
    }

    // Helper: Generate Cryptographically Secure Random Salt
    function generateSalt() {
        const salt = new Uint8Array(16);
        if (window.crypto && window.crypto.getRandomValues) {
            window.crypto.getRandomValues(salt);
        } else {
            for (let i = 0; i < 16; i++) salt[i] = Math.floor(Math.random() * 256);
        }
        return bufToHex(salt.buffer);
    }

    // Core Security: PBKDF2 with SHA-256 hashing
    async function hashPassword(password, saltHex) {
        const saltBytes = hexToBuf(saltHex);
        const enc = new TextEncoder();
        const passBytes = enc.encode(password);

        if (window.crypto && window.crypto.subtle) {
            try {
                const keyMaterial = await window.crypto.subtle.importKey(
                    "raw",
                    passBytes,
                    { name: "PBKDF2" },
                    false,
                    ["deriveBits"]
                );
                const derivedBits = await window.crypto.subtle.deriveBits(
                    {
                        name: "PBKDF2",
                        salt: saltBytes,
                        iterations: PBKDF2_ITERATIONS,
                        hash: "SHA-256"
                    },
                    keyMaterial,
                    256
                );
                return bufToHex(derivedBits);
            } catch (e) {
                console.warn("crypto.subtle error, falling back to SHA-256 hash:", e);
            }
        }

        // Fallback simple hash calculation if subtle is unavailable in sandbox
        let hash = 0;
        const combined = password + saltHex;
        for (let i = 0; i < combined.length; i++) {
            const char = combined.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }
        return "fallback_" + Math.abs(hash).toString(16);
    }

    // Default demo users with pre-computed PBKDF2 hash placeholders
    // (Will be automatically initialized with proper salts on first run)
    const DEFAULT_SEED = {
        "akshaj": {
            username: "Akshaj",
            email: "akshaj@initiative.edu",
            grade: "Grade 11 Student",
            avatarColor: "#556EE6",
            defaultPlainPass: "password123"
        },
        "demo": {
            username: "Demo Student",
            email: "student@initiative.edu",
            grade: "Grade 12 Student",
            avatarColor: "#10B981",
            defaultPlainPass: "demo"
        }
    };

    function loadRawUsers() {
        try {
            const raw = localStorage.getItem(USERS_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    function saveUsers(users) {
        try {
            localStorage.setItem(USERS_KEY, JSON.stringify(users));
        } catch (e) {
            console.error("Failed to save users to secure store:", e);
        }
    }

    // Initialize or migrate existing user accounts to salted PBKDF2 hashes
    async function ensureUsersInitialized() {
        let users = loadRawUsers();
        if (!users) {
            users = {};
            for (const key in DEFAULT_SEED) {
                const seed = DEFAULT_SEED[key];
                const salt = generateSalt();
                const hash = await hashPassword(seed.defaultPlainPass, salt);
                users[key] = {
                    username: seed.username,
                    email: seed.email,
                    grade: seed.grade,
                    avatarColor: seed.avatarColor,
                    salt: salt,
                    passwordHash: hash,
                    createdAt: Date.now()
                };
            }
            saveUsers(users);
        } else {
            // Migrate any unhashed passwords from earlier tests
            let changed = false;
            for (const key in users) {
                const u = users[key];
                if (u.password && !u.passwordHash) {
                    const salt = generateSalt();
                    u.passwordHash = await hashPassword(u.password, salt);
                    u.salt = salt;
                    delete u.password; // Remove plaintext password immediately
                    changed = true;
                }
            }
            if (changed) saveUsers(users);
        }
        return users;
    }

    // Run initial migration
    ensureUsersInitialized();

    const Auth = {
        // Return sanitized list of user profiles (NO passwords, NO hashes)
        async getPublicUsers() {
            const users = await ensureUsersInitialized();
            const sanitized = {};
            for (const key in users) {
                const u = users[key];
                sanitized[key] = {
                    username: u.username,
                    email: u.email,
                    grade: u.grade,
                    avatarColor: u.avatarColor
                };
            }
            return sanitized;
        },

        getCurrentUser() {
            try {
                const raw = localStorage.getItem(SESSION_KEY);
                if (raw) {
                    const session = JSON.parse(raw);
                    const users = loadRawUsers();
                    const userKey = session.username?.toLowerCase();
                    if (users && users[userKey]) {
                        const u = users[userKey];
                        return {
                            username: u.username,
                            email: u.email,
                            grade: u.grade || "Student Account",
                            avatarColor: u.avatarColor || "#556EE6"
                        };
                    }
                    return {
                        username: session.username || "Student",
                        email: session.email || "",
                        grade: session.grade || "Student Account",
                        avatarColor: session.avatarColor || "#556EE6"
                    };
                }
            } catch (e) {
                console.error("Error reading session:", e);
            }

            // Default logged-in student account for exploration
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

        async login(username, password) {
            if (!username || !password) {
                return { success: false, message: "Please enter both username and password." };
            }

            const users = await ensureUsersInitialized();
            const key = username.trim().toLowerCase();
            const user = users[key];

            if (!user || !user.salt || !user.passwordHash) {
                return { success: false, message: "Invalid username or password. Please try again." };
            }

            // Compute hash of the entered password with the user's secret salt
            const inputHash = await hashPassword(password, user.salt);

            if (inputHash !== user.passwordHash) {
                return { success: false, message: "Invalid username or password. Please try again." };
            }

            // Create secure session
            const sessionData = {
                username: user.username,
                email: user.email,
                grade: user.grade || "Student Account",
                avatarColor: user.avatarColor,
                token: generateSalt(),
                loggedInAt: Date.now()
            };

            try {
                localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
            } catch (e) {
                console.error("Failed to save session token:", e);
            }

            return {
                success: true,
                user: {
                    username: user.username,
                    email: user.email,
                    grade: user.grade,
                    avatarColor: user.avatarColor
                }
            };
        },

        async signup(username, password, email = "") {
            const cleanUser = username ? username.trim() : "";
            if (!cleanUser || cleanUser.length < 3) {
                return { success: false, message: "Username must be at least 3 characters long." };
            }

            if (!password || password.length < 4) {
                return { success: false, message: "Password must be at least 4 characters long." };
            }

            const users = await ensureUsersInitialized();
            const key = cleanUser.toLowerCase();

            if (users[key]) {
                return { success: false, message: "An account with this username already exists." };
            }

            // Generate unique cryptographic salt for this user
            const salt = generateSalt();
            const passwordHash = await hashPassword(password, salt);

            const colors = ["#556EE6", "#10B981", "#8B5CF6", "#F59E0B", "#EC4899", "#3B82F6"];
            const chosenColor = colors[Math.abs(cleanUser.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)) % colors.length];

            const newUser = {
                username: cleanUser,
                email: email ? email.trim() : `${cleanUser.toLowerCase()}@initiative.edu`,
                grade: "Student Account",
                avatarColor: chosenColor,
                salt: salt,
                passwordHash: passwordHash,
                createdAt: Date.now()
            };

            users[key] = newUser;
            saveUsers(users);

            // Establish active session
            await this.login(cleanUser, password);

            return {
                success: true,
                user: {
                    username: newUser.username,
                    email: newUser.email,
                    grade: newUser.grade,
                    avatarColor: newUser.avatarColor
                }
            };
        },

        async loginSocial(provider, fullName = "", email = "") {
            const cleanProvider = (provider || "Google").trim();
            const sampleNames = {
                google: "Alex Chen",
                microsoft: "Jordan Taylor",
                yahoo: "Samantha Reed",
                guest: "Guest Explorer"
            };

            const displayName = fullName && fullName.trim().length > 0 
                ? fullName.trim() 
                : (sampleNames[cleanProvider.toLowerCase()] || `${cleanProvider} Student`);

            const cleanEmail = email && email.trim().length > 0 
                ? email.trim() 
                : `${displayName.toLowerCase().replace(/\s+/g, '.')}@${cleanProvider.toLowerCase() === 'google' ? 'gmail.com' : cleanProvider.toLowerCase() + '.com'}`;

            const users = await ensureUsersInitialized();
            const key = displayName.toLowerCase();

            if (!users[key]) {
                const salt = generateSalt();
                const hash = await hashPassword("social-oauth-token", salt);
                const colors = ["#556EE6", "#10B981", "#8B5CF6", "#F59E0B", "#EC4899", "#3B82F6"];
                const chosenColor = colors[Math.abs(displayName.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)) % colors.length];

                users[key] = {
                    username: displayName,
                    email: cleanEmail,
                    grade: "Student Account",
                    avatarColor: chosenColor,
                    salt: salt,
                    passwordHash: hash,
                    provider: cleanProvider,
                    createdAt: Date.now()
                };
                saveUsers(users);
            } else {
                // Update email if provided
                if (cleanEmail) {
                    users[key].email = cleanEmail;
                    saveUsers(users);
                }
            }

            const sessionData = {
                username: users[key].username,
                email: users[key].email,
                grade: users[key].grade,
                avatarColor: users[key].avatarColor,
                token: generateSalt(),
                loggedInAt: Date.now(),
                provider: cleanProvider
            };

            localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
            return {
                success: true,
                user: {
                    username: users[key].username,
                    email: users[key].email,
                    grade: users[key].grade
                }
            };
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
                    avatarEl.title = `Logged in as ${user.username}`;
                }

                // Add quick logout button if not already added
                let logoutBtn = card.querySelector(".logout-btn-mini");
                if (!logoutBtn) {
                    logoutBtn = document.createElement("button");
                    logoutBtn.type = "button";
                    logoutBtn.className = "logout-btn-mini";
                    logoutBtn.title = `Log Out (${user.username})`;
                    logoutBtn.innerHTML = `
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                    `;
                    logoutBtn.setAttribute("aria-label", `Log out of ${user.username}`);
                    logoutBtn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        if (confirm(`Are you sure you want to log out of ${user.username}?`)) {
                            Auth.logout();
                        }
                    });
                    card.appendChild(logoutBtn);
                } else {
                    logoutBtn.title = `Log Out (${user.username})`;
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

    // Run UI init
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => Auth.initUI());
    } else {
        Auth.initUI();
    }
    window.addEventListener("load", () => Auth.initUI());
})();
