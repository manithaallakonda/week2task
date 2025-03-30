const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Add a new product
router.post('/addProduct', async (req, res) => {
    try {
        const { title, price, description, category, image, rating, discount, offerprice, reviews } = req.body;

        // Create a new product
        const newProduct = new Product({
            title,
            price,
            description,
            category,
            image,
            rating,
            discount,
            offerprice,
            reviews
        });

        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        console.error('Error adding product:', error.message);
        res.status(500).json({ message: 'Server error while adding product' });
    }
});

module.exports = router;
