const { User, Admission } = require("../models");

const authorization = async (req, res, next) => {
  const { admissionId } = req.params;
  try {
    const { userId, role } = req.loginInfo;
    //cari produknya dulu

    // kasih batasan
    if (role === "Master") {
      // console.log(req.params);
      next();
    } else if (role === "Admin") {
      let admission = await Admission.findByPk(admissionId);
      if (!admission) {
        throw { name: "Not found" };
      }
      if (admission.userId !== userId) {
        throw { name: "Forbidden" };
      } else {
        // kalau dia sama, maka boleh
        next();
      }
    } else {
      throw { name: "Forbidden" };
    }
  } catch (error) {
    next(error);
  }
};

const authorizationUser = async (req, res, next) => {
  try {
    const { role } = req.loginInfo;
    if (role === "Master") {
      next();
    } else {
      throw { name: "Forbidden" };
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { authorization, authorizationUser };
