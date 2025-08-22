/**
 * Common validation utilities
 */

export const validationUtils = {
  /**
   * Validate email format
   * @param {string} email - Email to validate
   * @returns {boolean} - True if valid email
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Validate password strength
   * @param {string} password - Password to validate
   * @returns {Object} - Validation result with isValid and message
   */
  validatePassword(password) {
    if (!password) {
      return { isValid: false, message: "Password is required" };
    }

    if (password.length < 6) {
      return {
        isValid: false,
        message: "Password must be at least 6 characters",
      };
    }

    return { isValid: true, message: "" };
  },

  /**
   * Validate required field
   * @param {string} value - Value to validate
   * @param {string} fieldName - Name of the field for error message
   * @returns {Object} - Validation result with isValid and message
   */
  validateRequired(value, fieldName) {
    if (!value || value.trim() === "") {
      return { isValid: false, message: `${fieldName} is required` };
    }

    return { isValid: true, message: "" };
  },
};

