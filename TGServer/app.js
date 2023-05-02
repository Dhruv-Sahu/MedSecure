
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");



// routes
const Upload = require("./Routes/Upload.route")
const Auth = require("./Routes/auth.route")
const TempStorage = require("./Routes/TempStorage.route")

//DB CONNECTION
mongoose.set('strictQuery', true)
mongoose.connect(
  "mongodb+srv://diptanshumandal1:A8fB2Z2uOUvQ4eQm@cluster0.z9ccpnx.mongodb.net/test",
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
app.use('/api/v1/temp',TempStorage)

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT} `);
});
