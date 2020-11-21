import express from 'express'
const jwt = require('express-jwt');
const jwtDecode = require('jwt-decode');

function getAuthenticationRoutes() {
  const router = express.Router()
  router.post('/', authenicate)
  return router
}

const requireAuth = jwt({
  secret: process.env.JWT_SECRET,
  audience: 'api.orbit',
  issuer: 'api.orbit'
});

const requireAdmin = (req, res, next) => {
  const { role } = req.user;
  if (role !== 'admin') {
    return res
      .status(401)
      .json({ message: 'Insufficient role' });
  }
  next();
};

async function authenicate(req, res) {
    try {
        const { email, password } = req.body;
    
        const user = await User.findOne({
          email
        }).lean();
    
        if (!user) {
          return res.status(403).json({
            message: 'Wrong email or password.'
          });
        }
    
        const passwordValid = await verifyPassword(
          password,
          user.password
        );
    
        if (passwordValid) {
          const { password, bio, ...rest } = user;
          const userInfo = Object.assign({}, { ...rest });
    
          const token = createToken(userInfo);
    
          const decodedToken = jwtDecode(token);
          const expiresAt = decodedToken.exp;
    
          res.json({
            message: 'Authentication successful!',
            token,
            userInfo,
            expiresAt
          });
        } else {
          res.status(403).json({
            message: 'Wrong email or password.'
          });
        }
      } catch (err) {
        console.log(err);
        return res
          .status(400)
          .json({ message: 'Something went wrong.' });
      }
}

async function signup(req, res) {
    try {
        const { email, firstName, lastName } = req.body;
    
        const hashedPassword = await hashPassword(
          req.body.password
        );
    
        const userData = {
          email: email.toLowerCase(),
          firstName,
          lastName,
          password: hashedPassword,
          role: 'admin'
        };
    
        const existingEmail = await User.findOne({
          email: userData.email
        }).lean();
    
        if (existingEmail) {
          return res
            .status(400)
            .json({ message: 'Email already exists' });
        }
    
        const newUser = new User(userData);
        const savedUser = await newUser.save();
    
        if (savedUser) {
          const token = createToken(savedUser);
          const decodedToken = jwtDecode(token);
          const expiresAt = decodedToken.exp;
    
          const {
            firstName,
            lastName,
            email,
            role
          } = savedUser;
    
          const userInfo = {
            firstName,
            lastName,
            email,
            role
          };
    
          return res.json({
            message: 'User created!',
            token,
            userInfo,
            expiresAt
          });
        } else {
          return res.status(400).json({
            message: 'There was a problem creating your account'
          });
        }
      } catch (err) {
        return res.status(400).json({
          message: 'There was a problem creating your account'
        });
      }
}

export {getAuthenticationRoutes}
