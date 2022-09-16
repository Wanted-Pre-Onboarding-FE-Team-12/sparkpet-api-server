// const comment = require("./data/comments");
const path = require("path");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname + "/comment.json"));
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);
server.listen(port, () => console.log("Server is Running"));
