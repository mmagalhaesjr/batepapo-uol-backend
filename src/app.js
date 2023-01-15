import express from "express";
import cors from "cors"
import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

const PORTA = 5000;

const mongoClient = new MongoClient(process.env.DATABASE_URL)
let db;

try{
   await mongoClient.connect()
    db = mongoClient.db() ;
    console.log('Conectado ao banco de dados')
}catch{
    console.log('Erro ao conectar com o servidor')
}

app.get('/',(req, res)=>{
    res.send('marcosjr')
})


app.listen(PORTA, ()=> {
    console.log(`*****Rodando na porta ${PORTA}*****`)
})