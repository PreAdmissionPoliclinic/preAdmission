const { compareHash } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
  static async Login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username) {
        throw { name: "Username is required" };
      }
      if (!password) {
        throw { name: "Password is required" };
      }
      const user = await User.findOne({
        where: {
          username,
        },
      });
      const validPassword = compareHash(password, user.password);
      if (!validPassword) {
        throw { name: "invalid Password" };
      }
      const payload = { id: user.id, name: user.name, role: user.role };
      const token = signToken(payload);
      res.status(200).json({ access_token: token });
      console.log(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async addUser(req, res, next) {
    try {
      const { name, username, password, role } = req.body;
      const newUser = {
        name,
        username,
        password,
        role,
      };
      const response = await User.create(newUser);
      if (!response) {
        throw {
          name: "Create User Failed",
        };
      }
      let data = {
        id: response.id,
        username: response.username,
      };
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = { UserController };
