const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: "Wireless Mouse", price: 500 },
  { id: 2, name: "Keyboard", price: 800 }
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
