import { Request, Response } from 'express'
import { CreateProductInput } from "../../models/Product"
import prisma from "../../utils/prisma"
import { error } from 'console'

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    })
    res.json({
      success: true,
      data: products,
      message: 'Products retrieved successfully'
    })
 } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving products',
      error: process.env.NODE_ENV === 'development' 
        ? (error instanceof Error ? error.message : 'Unknown error')
        : 'Internal server error'
    })
  }
}

export const  getProductById = async (req: Request, res: Response) => {
  try{
    const {id} = req.params
    const product = await prisma.product.findUnique({
      where : {id : parseInt(id)}
    })

    if(!product){
      return res.status(404).json({
        success: false, 
        message: 'Product not found'
      })
    }
    res.status(200).json({
      success: true, 
      data: product, 
      message: 'Product retrieved successfully',
    })
  }catch (err){
    res.status(500).json({
      success:  false, 
      message: "Error retrieving product", 
      error: process.env.NODE_ENV === 'development' ? (err instanceof Error ? err.message : "Unkown error") : 'Internal server error'
    })
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, stock }: CreateProductInput = req.body

    // Validation
    if (!name || !price) {
      return res.status(400).json({
        success: false,
        message: 'Name and price are required'
      })
    }

    if (price <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Price must be greater than 0'
      })
    }

    const product = await prisma.product.create({
      data: {
        name: name.trim(),
        description: description?.trim(),
        price: parseFloat(price.toString()),
        stock: stock ? parseInt(stock.toString()) : 0
      }
    })

    res.status(201).json({
      success: true,
      data: product,
      message: 'Product created successfully'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating product',
      error: process.env.NODE_ENV === 'development' 
        ? (error instanceof Error ? error.message : 'Unknown error')
        : 'Internal server error'
    })
  }
}

