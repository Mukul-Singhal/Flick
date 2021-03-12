import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";

const app = express();

// app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", function (req, res) {
  res.send("Initiate a Server");
});
app.get("/user", function (req, res) {
  res.send("getting a post request");
});

export default app;
