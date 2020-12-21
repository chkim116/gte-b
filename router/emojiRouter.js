import express from "express";
import { getEmoji } from "../controller/emojiController";

const emojiRouter = express.Router();

emojiRouter.post("/search", getEmoji);

export default emojiRouter;
