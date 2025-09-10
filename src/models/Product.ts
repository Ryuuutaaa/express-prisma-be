export interface Product {
  id?: number
  name: string
  description?: string
  price: number
  stock: number
  createdAt?: Date
  updatedAt?: Date
}

export interface CreateProductInput {
  name: string
  description?: string
  price: number
  stock?: number
}

export interface updateProductInput {
  name?: string, 
  description?: string 
  price?: number, 
  stock?: number
}