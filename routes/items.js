const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Create a new item
router.post('/', async (req, res) => {
  const { type, name, description, location, imageUrl, additionalFields } = req.body;
  
  try {
    const item = new Item({ type, name, description, location, imageUrl, additionalFields });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get items by type
router.get('/:type', async (req, res) => {
  try {
    const items = await Item.find({ type: req.params.type });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
