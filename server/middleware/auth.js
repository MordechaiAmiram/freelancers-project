const jwt = require("jsonwebtoken");
const { hasOwnerPermissions, hasAdminPermissions, hasOwnerOrAdminPermissions } = require("../permissions/permissions");

const secretKey = process.env.ACCESS_TOKEN_SECRET

function authenticateToken(req, res, next) {
  
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).send('Token is required')
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded 
    next()
  } catch (error) {
    res.status(401).send('Invalid token')
  }
};


function authOwner(req, res, next){

  if (!hasOwnerPermissions(req.user, req.body.userId)) {
    return res.sendStatus(401).send("Not allowed")
  }
  
  next()
}

function authAdmin(req, res, next){

  if (!hasAdminPermissions(req.user)) {
    return res.sendStatus(401).send("Not allowed")
  }

  next()
}


function authOwnerOrAdmin(req, res, next){

  if (!hasOwnerOrAdminPermissions(req.user, req.body.userId)) {
    return res.sendStatus(401).send("Not allowed")
  }

  next()
}

module.exports = {
  authenticateToken,
  authOwner,
  authAdmin,
  authOwnerOrAdmin
};