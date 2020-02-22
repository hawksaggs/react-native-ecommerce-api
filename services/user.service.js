import User from '../model/User';

module.exports = {
    getUsers: async () => {
        try {
            return User.find({ isActive: true });
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getUserById: async (userId) => {
        try {
            return User.findById(userId, 'name email isActive');
        } catch(error) {
            throw new Error(error.message);
        }
    },
    createUser: async (user) => {
        try {
            const userModel = new User(user);
            return userModel.save();
        } catch (error) {
            throw new Error(error.message);
        }
    }
}