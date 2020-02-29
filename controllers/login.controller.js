// import LoginService from '../services/login.service';

export default class LoginController {
  constructor(opts) {
    this.loginService = opts.loginService;
  }
  async login(req, res) {
    try {
      const token = await this.loginService.loginUser(req.body);
      return res.json({ token });
    } catch (error) {
      return res.json({ message: error.message }, 400);
    }
  }

  async signUp(req, res) {
    try {
      const user = await this.loginService.registerUser(req.body);
      return res.json(user);
    } catch (error) {
      return res.json({ message: error.message }, 400);
    }
  }
}
