import express from 'express'
import {getAuthenticationRoutes} from './authentication'

function getRoutes() {
  const router = express.Router()
  router.use('/authenticate', getAuthenticationRoutes())
  return router
}

export {getRoutes}
