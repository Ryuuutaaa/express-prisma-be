import express from "express"
import { getProducts,getProductById,createProduct,updateProduct,deleteProduct } from "../controllers/ProductController"

const router = express.Router()

router.get("/products", getProducts)
router.get("/products/:id", getProductById)
router.get("/products", createProduct)
router.get("/products/:id", updateProduct)
router.get("/products/:id", deleteProduct)

export default router