const router = require('express').Router()

const Users = require('./user-model.js')
const restricted = require('../auth/restricted-middleware.js')

router.use(restricted)

router.get("/", restricted, (req, res) => {
    const token = req.jwt
    Users.find()
        .then(users => {
          res.status(200).json({ users, jwt: token });
        })
        .catch(err => res.send(err));
})

module.exports = router