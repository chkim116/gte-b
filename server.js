import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import emojiRouter from "./router/emojiRouter";

const app = express();

app.use(helmet());
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", emojiRouter);
app.get("/", (req, res) => {
    res.send("welcome!");
});

app.listen(process.env.PORT || 4000, () => {
    console.log(`server on http://localhost:${process.env.PORT}`);
});
