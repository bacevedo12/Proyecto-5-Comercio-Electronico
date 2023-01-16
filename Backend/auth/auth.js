import {expressjwt as jwt} from 'express-jwt';
import * as dotenv from 'dotenv';

//const { expressjwt: jwt } = require("express-jwt");

dotenv.config();


export const getToken = (req) => {
  let { authorization } = req.headers;
  if (authorization) {
    let [type, token] = authorization.split(" ");
    return (type === 'Token' || type === "Bearer") ? token : null;
  }
  return null;
}

export const auth = jwt({
  secret: process.env.SECRET,
  algorithms: ["HS256"],
  userProperty: "user",
  getToken
});


