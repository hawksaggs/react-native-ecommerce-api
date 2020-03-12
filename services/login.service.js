export default class LoginService {
  constructor(opts) {
    // this.userService = opts.container.resolve('userService');
    // this.userService = opts.userService;
    this.container = opts.container;
    this.model = opts.model;
    this.utils = opts.utils;
  }
  
  async registerUser(data) {
    const { email, password, name, confirmPassword } = data;
    if (password !== confirmPassword) {
      throw new Error('Password does not match');
    }
    try {
      const existUser = await this.model.User.find({ email });
      if (existUser && existUser.length) {
        throw new Error('User already exists');
      }
      const user = new this.model.User({ email, password, name });
      await user.save();
      const userService = this.container.resolve('userService');
      const users = await userService.getUsers();
      return { email: user.email, name: user.name, users };
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  async loginUser(data) {
    const { model } = this;
    const { User } = model;
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid email or password');
    }
    if (user.password !== this.utils.commonUtils.createHash(password)) {
      throw new Error('Invalid email or password');
    }
    return this.utils.jwtUtils.generateToken({ email: user.email });
  }
}
