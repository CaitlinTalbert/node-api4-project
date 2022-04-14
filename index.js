const server = require("./src/server");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

server.get("/api/hello", (req, res) => {
  res.json({ message: "api is up" });
});

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
