import express from 'express'
import {getMathRoutes} from './math'
import {getAuthenticationRoutes} from './authentication'

function getRoutes() {
  const router = express.Router()
  router.use('/authenticate', getAuthenticationRoutes())
  router.use('/math', getMathRoutes())
  return router
}

export {getRoutes}
