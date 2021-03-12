import app from "./app";

const port = process.env.PORT || 8000;
const handleListening = () => {
  console.log(` listening on: http://localhost:${port}`);
};

app.listen(port, handleListening);
