const { decode } = require("../helpers/jwt");
const { User } = require("../models/index");
const authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw { name: "Unauthorized" };
    }
    const access_token = authorization.split(" ")[1];
    const verified = decode(access_token);
    const user = await User.findOne({
      where: {
        id: verified.id,
      },
    });
    if (!user) {
      throw { name: "Not found" };
    }
    const { id, name, role } = verified;
    req.loginInfo = {
      userId: id,
      name: name,
      role: role,
    };
    // console.log(req.loginInfo);
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = { authentication };
