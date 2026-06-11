import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        host: process.env.DB_HOST,
        port: process.env.DB_port || 3306,
        dialect: 'mysql',
        logging: false
    }
);
(async () => {
    try {
        await sequelize.authenticate();
        console.log('==== CONEXION ESTABLECIDA ====');       
    } catch (error) {
        console.error('=====XXXX  ERROR AL CONECTAR LA BASE DE DATOS XXXX=====',error.message);
    }

})();