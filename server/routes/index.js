const apiRouter = require("./api");
const authRouter = require("./auth");

const routes = app => {
  app.use("/api", apiRouter);
  app.use("/auth", authRouter);
};

module.exports = routes;
