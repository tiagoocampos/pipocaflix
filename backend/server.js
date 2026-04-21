import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import usersRoutes from "./routes/usersRoutes.js";
configDotenv();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send("Servidor rodando")
    console.log("server rodando com sucesso")
})

app.use("/users", usersRoutes);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`)
})

