import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import EquipoRouter from './src/routes/EquipoRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());  //ESTE ES PARA VALIDAR EL REQ.BODY

app.use('/api', EquipoRouter);

app.get('/',(req,res)=>{
    res.send('🚀 Backend de práctica corriendo impecable.');
    
});

const startServer = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('✨ Modelos sincronizados con phpMyAdmin.');
        app.listen(PORT, () => {
            console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Error crítico al arrancar:', error.message);
    }
};

startServer();