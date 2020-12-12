const { Client } = require('pg')
const {
  createToken,
  hashPassword,
  verifyPassword
} = require('../utils');
const jwt = require('express-jwt');
const jwtDecode = require('jwt-decode');

const { NODE_ENV, PG_CONNECT } = process.env;
const client = new Client({connectionString: PG_CONNECT})
client.connect();


export const signup = async (req, res, next) => {
    console.log(req.body);
    try {
        const { email, firstName, lastName } = req.body;
        let role = "user";
    
        const hashedPassword = await hashPassword(
          req.body.password
        ).catch(err => console.log(err));
    
        const noCurrentEmail = await client.query({text: 'Select * From public."user" where email = $1', values: [email]}).then(res => {
          return true
        }).catch(err => {
          console.log(err);
          return false;
        })
    
        if (!noCurrentEmail) {
          return res
            .status(400)
            .json({ message: 'Email already exists' });
        }
    
        const userInserted = await client.query({
          text: 'INSERT INTO public."user"(email, first, last, role, password) VALUES($1, $2, $3, $4, $5) Returning *',
          values: [email, firstName, lastName, role, hashedPassword]
        }).then(res => {
          console.log(res.rows[0]);
          return res.rows[0];
        }).catch(err => {
          console.log(err);
          return false;
        })
    
        if (userInserted) {
          const token = createToken(userInserted);
          const decodedToken = jwtDecode(token);
          const expiresAt = decodedToken.exp;
    
          const {
            first,
            last,
            email,
            role
          } = userInserted;
    
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

export const authenticate = async (req, res, next) => {
    try {
        const { email, password } = req.body;
    
        const user = await client.query({text: 'Select * From public."user" where email = $1', values: [email]}).then(res => {
          return res.rows[0];
        }).catch(err => {
          console.log(err);
          return false;
        })
    
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
          const userInfo = {...rest};

          const token = createToken(userInfo);
          const decodedToken = jwtDecode(token);
          const expiresAt = decodedToken.exp;

          console.log(`Password validated - User ${email}`);
    
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
        next({err, errMessage: 'catch on signup'})
        return res
          .status(400)
          .json({ message: 'Something went wrong.' });
      }
}