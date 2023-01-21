import jwt from 'jsonwebtoken'; 

//const jwt = require("jsonwebtoken");

import * as dotenv from 'dotenv';

dotenv.config();

export const getToken = (id, username) => {
  return jwt.sign({
     username,
     id

  }, process.env.SECRET);
}

export const validateToken = (token) => {
  return jwt.validateToken(token, process.env.SECRET);
}

