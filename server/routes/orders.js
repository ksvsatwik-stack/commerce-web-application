const express = require('express');
const router = express.Router();

let orders = [];

router.post('/', (req, res) => {
  orders.push(req.body);
  res.send("Order Placed Successfully");
});

router.get('/', (req, res) => {
  res.json(orders);
});

module.exports = router;
