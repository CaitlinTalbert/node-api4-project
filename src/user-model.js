const { nanoid } = require("nanoid");

function getId() {
  return nanoid().slice(0, 5);
}

let users = [
  { id: getId(), username: "momo", password: "0000" },
  { id: getId(), username: "kiki", password: "1111" },
  { id: getId(), username: "sean", password: "2222" },
  { id: getId(), username: "catalina", password: "3333" },
];

module.exports = {
  async findAll() {
    return Promise.resolve(users);
  },

  async create({ username, password }) {
    const newUser = { id: getId(), username, password };
    users.push(newUser);
    return Promise.resolve(newUser);
  },

  async findUser(username) {
    const user = users.findAll((user) => user.username === username);
    return Promise.resolve(user);
  },
};
