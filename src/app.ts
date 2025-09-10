import express from 'express'; 
import cors from 'cors'; 
import helmet from 'helmet';
import morgan from 'morgan';
import producRoutes from './routes/productRoutes'


const app = express();

// midleware
app.use(helmet())
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// routes
app.use('/api/products', producRoutes);

// heath check
app.get("/health", (req, res) => {
  res.json({status: "ok", message : "server is running", timeStamp: new Date().toString(), uptime:  process.uptime})
})

// 404 handler
app.use("*", (req, res) => {
  res.status(400).json({succeess : false, message: "route not found"})
})

// global handler
app.use((error: any, req: any, res: any, next: any) => {
  console.error("Global errro handler", error)
  res.status(500).json({
    success: false, 
    message: "internal server error", 
    error: process.env.NODE_ENV === 'developmern' ?  error.message : undefined
  })
})

export default app