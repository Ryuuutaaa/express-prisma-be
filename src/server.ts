import app from './app'

const PORT = process.env.PORT || 300

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log('🚀 Server started successfully!')
      console.log(`📍 Running on: http://localhost:${PORT}`)
      console.log(`📊 Health check: http://localhost:${PORT}/health`)
      console.log(`🛍️ Products API: http://localhost:${PORT}/api/products`)
      console.log('Press CTRL+C to stop the server')
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()