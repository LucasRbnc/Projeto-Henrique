import express from "express";
import routes from "./routes/index"
import dotenv from "dotenv";

import { connect } from "./database/connection";
dotenv.config();

const PORT = process.env.PORT || 3010;
const app = express();
app.use(express.json());

connect();

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}...`);
});

app.use(routes);