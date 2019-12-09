require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const checkJwt = require("./config/checkJwt");
const routes = require("./routes");
const app = express();
const port = process.env.SERVER_PORT || 3003;
const mongooseUri = process.env.MONGOOSE_URI || "mongodb://localhost:27017/sibox";

// Database
mongoose.connect(mongooseUri, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(cors());
app.use(helmet());
app.use(checkJwt);
app.use(express.json());

// Pass incoming calls to route handler
routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
