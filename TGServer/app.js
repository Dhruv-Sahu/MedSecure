
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");



// routes
const Upload = require("./Routes/Upload.route")
const Auth = require("./Routes/auth.route")

//DB CONNECTION
mongoose.connect(
  "mongodb://127.0.0.1:27017/techgium",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to mondo db server");
  }
);

const PORT = 8080;

//app Initialization
const app = express();

//universal middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(
  cors({
    origin: "*",
  })
);

app.use('/api/v1/upload', Upload)
app.use('/api/v1/auth', Auth)

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT} `);
});
