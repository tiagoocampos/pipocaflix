import { Router } from "express";
import { db } from "../database/db.js";
import { users } from "../database/schema.js";
import bcrypt from "bcrypt";
import { and, eq } from "drizzle-orm";
import jwt from "jsonwebtoken";
import "dotenv/config";

const router = Router();

router.post("/register", async(req, res) => {
    try {
        const { nome, email, password } = req.body;
        if(!nome || !email || !password) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios"})
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await db.insert(users).values({
            nome,
            email,
            password: hashPassword,
        }).returning();

        res.status(201).json({ message: "Usuário cadastrado com sucesso", 
            user: {
                id: user[0].id,
                nome: user[0].nome,
                email: user[0].email,                
            }
        })
    } catch (error) {
       console.log("Erro no servidor", error)
       res.status(500).json({ message: "Erro no servidor"})
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({ message: "Digite um email e uma senha"})
        }
        
        const user = await db
        .select()
        .from(users)
        .where(
            and(
                eq(users.email, email),

            )
        )

        if(user.length === 0){
            return res.status(401).json({message: "Email ou senha inválidos!"})

        }

        const isValidPassword = await bcrypt.compare(password, user[0].password);
        if(!isValidPassword){
            return res.status(401).json({message: "Senha inválida!"})
        }

        const token = jwt.sign(
            {id: user[0].id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        res.status(200).json({ 
            message: "Login realizado com sucesso", 
            token,
            user: {
                id: user[0].id,
                nome: user[0].nome,
                email: user[0].email,
            }
        
        })

        
    } catch (error) {
        console.log("Erro no servidor", error)
        return res.status(500).json({ message: "Erro no servidor "})
    }
})

function authToken(req, res, next){
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({ message: "Token não enviado"})
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido"})
    }
}

router.get("/me", authToken, (req, res) =>{
    res.json({ message: `Usuário logado> ${req.userId}`})
})

export default router;