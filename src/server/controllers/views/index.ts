import { Router } from "express";
import fs from "fs";
import React from "react";
import path from "path";
import ReactDOMServer from "react-dom/server";
import App from "../../../client/components";
const router = Router();

const manifest = fs.readFileSync(
  path.join(__dirname, "static/manifest.json"),
  "utf-8"
);

const assets = JSON.parse(manifest);

router.get("*", (req, res) => {
  const component = ReactDOMServer.renderToString(React.createElement(App));
  res.render("client", { assets, component });
});

export default router;
