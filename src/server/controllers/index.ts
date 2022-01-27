import { Router } from "express";
import viewRoutes from "./views";

const router = Router();

router.route("/").get(viewRoutes);
router.route("/api").get((req, res) => {
  res.json({ hello: "world" });
});

export default router;
