const express = require("express");
const { getAllProducts, createProduct ,updateProduct, deleteProduct, getProductDetails} = require("../controllers/productControllers");


const router = express.Router();
router.route("/products").get(isAuthenticatedUser, getAllProducts);
router.route("/products/new").post(createProduct);
router.route("/products/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)

module.exports = router;