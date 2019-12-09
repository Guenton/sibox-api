const authRouter = require("express").Router();
const loginAuth = require("./login");

authRouter.use("/login", loginAuth);

module.exports = authRouter;
