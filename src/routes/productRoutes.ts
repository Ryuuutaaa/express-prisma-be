import { Router } from "express";
import { getProducts, createProduct } from "../controllers/product/productController";

const router = Router()

// get api
router.get("/", getProducts);


// post prodcut
router.post("/", createProduct);

export default router;