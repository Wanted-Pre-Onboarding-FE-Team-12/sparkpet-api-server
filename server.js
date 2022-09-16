const comment = require("./comments.json");
const jsonServer = require("json-server");
const { wakeDyno } = require("heroku-keep-awake");

const server = jsonServer.create();
const router = jsonServer.router(comment);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 4000;

const DYNO_URL = "https://comment-api.herokuapp.com/";
const opts = {
  interval: 29,
  logging: false,
};

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.listen(port, () => {
  console.log("Server is Running");
  wakeDyno(DYNO_URL, opts);
});
