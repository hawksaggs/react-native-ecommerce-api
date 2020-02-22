import express from 'express';
import * as UserController from '../controllers/user.controller';

const router = express.Router();

router.get('/users', UserController.getUsers);
router.post('/users', UserController.createUser);
router.get('/users/:userId', UserController.getUserById);

module.exports = router;
