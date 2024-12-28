const http = require ('http') //import http module
const express = require('express')
const { server : SocketServer } = require('socket.io')

const app = express()

const server = http.createServer(app)