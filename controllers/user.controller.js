import * as UserService from '../services/user.service';

module.exports = {
    createUser: async (req, res) => {
        const user = await UserService.createUser(req.body);
        return res.json(user);
    },
    updateUser: (req, res) => {

    },
    deleteUser: (req, res) => {

    },
    getUserById: async (req, res) => {
        const user = await UserService.getUserById(req.params.userId);
        return res.json(user);
    },
    getUsers: async (req, res) => {
        const users = await UserService.getUsers();
        return res.json(users);
    }
}