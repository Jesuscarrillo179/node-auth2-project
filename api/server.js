const express = require('express')
const helmet = require('helmet')

const server = express()

const userRouter = require("../users/user-router.js")
const authRouter = require("../auth/auth-router.js")

server.use(helmet())
server.use(express.json())

server.use("/api/users", userRouter)
server.use("/api/auth", authRouter)

server.get("/", (req, res) => {
    res.send("Hello, your API is up!")
})

module.exports = server