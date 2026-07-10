const express = require('express');
const router = express.Router();

const users = [
  { username: "admin", password: "admin123", role: "Admin" },
  { username: "user", password: "user123", role: "User" }
];

router.get('/', (req, res) => {
  res.json(users);
});

module.exports = router;
