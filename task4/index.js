const fs = require("fs");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 3000;
const USERS_FILE = "users.json";

app.use(express.json());

const readUsersFromFile = () => {
  if (!fs.existsSync(USERS_FILE)) return [];
  const data = fs.readFileSync(USERS_FILE, "utf8");
  return data ? JSON.parse(data) : [];
};

const writeUsersToFile = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

app.get("/users", (req, res) => {
  const users = readUsersFromFile();
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const users = readUsersFromFile();
  const user = users.find((u) => u.id === req.params.id);
  user
    ? res.json(user)
    : res.status(400).json({ message: "Пользователь не найден" });
});

app.post("/users", (req, res) => {
  const users = readUsersFromFile();
  const newUser = { id: uuidv4(), ...req.body };
  users.push(newUser);
  writeUsersToFile(users);
  res.status(200).json(newUser);
});

app.put("/users/:id", (req, res) => {
  let users = readUsersFromFile();
  const index = users.findIndex((u) => u.id === req.params.id);
  if (index === -1)
    return res.status(400).json({ message: "Пользователь не найден" });
  users[index] = { ...users[index], ...req.body };
  writeUsersToFile(users);
  res.json(users[index]);
});

app.delete("/users/:id", (req, res) => {
  let users = readUsersFromFile();
  const filteredUsers = users.filter((u) => u.id !== req.params.id);
  if (users.length === filteredUsers.length) {
    return res.status(400).json({ message: "Пользователь не найден" });
  }
  writeUsersToFile(filteredUsers);
  res.json({ message: "Пользователь удалён" });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
