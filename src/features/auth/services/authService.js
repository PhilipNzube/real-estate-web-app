// Placeholder authentication service
// In a real application, this would handle API calls to your backend

export const authService = {
  /**
   * Authenticate user with email and password
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @returns {Promise<Object>} - User data and token
   */
  async login(email, password) {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Placeholder validation
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    // Placeholder authentication logic
    if (email === "demo@example.com" && password === "password") {
      return {
        user: {
          id: 1,
          email: "demo@example.com",
          name: "Demo User",
        },
        token: "placeholder-jwt-token",
      };
    } else {
      throw new Error("Invalid email or password");
    }
  },

  /**
   * Logout user
   * @returns {Promise<void>}
   */
  async logout() {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Clear any stored tokens/user data
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
  },

  /**
   * Check if user is authenticated
   * @returns {boolean}
   */
  isAuthenticated() {
    return !!localStorage.getItem("authToken");
  },
};

