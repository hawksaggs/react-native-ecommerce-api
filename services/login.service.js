import { jwtUtils, commonUtils } from '../utils';
import User from '../model/user.model';

export default class LoginService {
  async registerUser(data) {
    const { email, password, name, confirmPassword } = data;
    if (password !== confirmPassword) {
      throw new Error('Password does not match');
    }
    try {
      const existUser = await User.find({ email });
      if (existUser && existUser.length) {
        throw new Error('User already exists');
      }
      const user = new User({ email, password, name });
      await user.save();
      return { email: user.email, name: user.name };
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  async loginUser(data) {
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid email or password');
    }
    if (user.password !== commonUtils.createHash(password)) {
      throw new Error('Invalid email or password');
    }
    return jwtUtils.generateToken({ email: user.email });
  }
}
