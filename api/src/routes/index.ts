import express from 'express'
const app = express();
const router = express.Router();
// import {clientLogger} from "../logs/logConfigs";
import  { signup, authenticate } from '../controllers'

router.post('/client-error', (req, res) => {
  // clientLogger.error(req.body)
  res.sendStatus(200);
})

router.get('/signup', signup)
router.get('/login', authenticate)

const attachUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ message: 'Authentication invalid' });
  }
  const decodedToken = false//jwtDecode(token.slice(7));

  if (!decodedToken) {
    return res.status(401).json({
      message: 'There was a problem authorizing the request'
    });
  } else {
    req.user = decodedToken;
    next();
  }
};

app.use(attachUser);

router.get('*', (req, res) => {
  res.send(`Sorry, there were no API path's found for ${req.path}`)
})

module.exports = router;

