const bcrypt = require('bcrypt');

const passwordHashingService = {
  hashPassword: async (password) => {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      throw new Error(`Error hashing password: ${error}`);
    }
  },

  verifyPassword: async (password, hashedPassword) => {
    try {
      const isPasswordValid = await bcrypt.compare(password, hashedPassword);
      return isPasswordValid;
    } catch (error) {
      throw new Error(`Error verifying password: ${error}`);
    }
  }
}

module.exports = passwordHashingService;