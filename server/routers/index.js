const express = require("express");
const { authentication } = require("../middleware/authentication");
const { authorizationUser } = require("../middleware/authorization");
const { UserController } = require("../contollers/UserController");
const routerAdmission = require("./routerAdmission");
const router = express.Router();

//userLogin
router.post("/user/login", UserController.Login);
router.use(authentication);
//userAddUser
router.post("/user/addUser", authorizationUser, UserController.addUser);
//addmission
router.use("/admission", routerAdmission);
module.exports = router;
