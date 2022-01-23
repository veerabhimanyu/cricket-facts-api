import express from "express";
import { allFacts, randomFacts } from "../controllers/getData.js";

const router = express.Router();

router.get("/all", allFacts);

router.get("/random", randomFacts);

export default router;
