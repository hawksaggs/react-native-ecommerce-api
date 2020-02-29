import User from '../model/user.model';

export default class UserService {
  constructor(opts) {}

  async getUsers() {
    try {
      return User.find({ isActive: true }, '-password');
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUserById(userId) {
    try {
      return User.findById(userId, 'name email isActive');
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async createUser(user) {
    try {
      const userModel = new User(user);
      return userModel.save();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
