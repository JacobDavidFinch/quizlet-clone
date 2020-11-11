const router = require('express').Router();
import {clientLogger} from "../logs/logConfigs";
import  { getLobby, getTicket, getAllLobbies } from '../controller';

router.post('/client-error', (req, res) => {
  clientLogger.error(req.body)
  res.sendStatus(200);
})

router.get('/lobby-list/ticket/:ticket', getTicket)

router.get('/lobby-list/branch/:branch', getLobby)

router.get('/lobby-list/all-branches', getAllLobbies)

router.get('*', (req, res) => {
  res.send(`Sorry, there were no API path's found for ${req.path}`)
})

module.exports = router;
