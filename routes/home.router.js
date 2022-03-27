import express from 'express'

const router = express.Router()

const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })

router.get('/', (req, res, next) => {
  return res.json({
    message: 'IEMA common service v1.0.0',
    deployTime: time
  })
})

export default router
