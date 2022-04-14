const express = require("express");
const Users = require("./user-model");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.get("/api/users", (req, res) => {
  Users.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({
        message: "could not find users",
        err: err.message,
      });
    });
});

server.post("/api/register", (req, res) => {
  const { body } = req.body;
  if (!body.username || !body.username) {
    res.status(400).json({
      message: "username and password required",
    });
  } else {
    Users.create(body)
      .then((newUser) => {
        res.status(200).json(newUser);
      })
      .catch((err) => {
        res.status(500).json({
          message: "unable to create new user",
          err: err.message,
        });
      });
  }
});

server.post("/api/login", (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({
      message: "username and password incorrect",
    });
  } else {
    res.json({
      message: `You are now logged in ${req.body.username}`,
    });
  }
});

server.use("*", (req, res) => {
  res.send(`<h1>Hello, there!</h1>`);
});

module.exports = server;
