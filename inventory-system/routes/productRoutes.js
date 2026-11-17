const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  adjustStock,
  deleteProduct,
  getLowStockReport,
  getCategorySummary,
} = require('../controllers/productController');

// Report & Aggregation Routes (Must come before /:id)
router.get('/low-stock', getLowStockReport);
router.get('/summary', getCategorySummary);

// Standard CRUD & Stock Adjustment Routes
router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);
router.patch('/:id/stock', adjustStock);

module.exports = router;