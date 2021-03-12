import express from "express";
const app = express();
const port = process.env.PORT || 8000;

app.get("/", function (req, res) {
  res.send("Initiate a Server");
});
app.get("/user", function (req, res) {
  res.send("getting a post request");
});

const handleListening = () => {
  console.log(` listening on: http://localhost:${port}`);
};
app.listen(port, handleListening);
