import express from "express"
import cors from "cors"
import dotent from "dotenv"
dotent.config()

const app  = express()

app.use(cors())
app.use(express.json())

app.listen(process.env.APP_PORT, () => {
  console.log('server up and running  ')
})