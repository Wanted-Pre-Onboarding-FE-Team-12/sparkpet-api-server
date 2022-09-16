const comment = require("./comments.json");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router(comment);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.listen(port, () => console.log("Server is Running"));
