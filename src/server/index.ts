import express from "express";
import path from "path";
import routes from "./controllers";

const server = express();

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "static/views"));

server.use("/", express.static(path.join(__dirname, "views")));

server.use(routes);

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
