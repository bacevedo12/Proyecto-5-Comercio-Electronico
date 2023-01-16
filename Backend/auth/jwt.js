import jwt from 'jsonwebtoken'; 

//const jwt = require("jsonwebtoken");

import * as dotenv from 'dotenv';

dotenv.config();

export const getToken = (username) => {
  return jwt.sign({
    sub: username,
  }, process.env.SECRET);
}

export const validateToken = (token) => {
  return jwt.validateToken(token, process.env.SECRET);
}

