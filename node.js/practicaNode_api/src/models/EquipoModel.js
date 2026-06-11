import { DataTypes} from "sequelize";
import { sequelize } from "../config/db.js";

export const Equipo = sequelize.define(
    'Equipo', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
    
        },
        ciudad:{
            type: DataTypes.STRING,
            allowNull:true
        },
        pais:{
            type: DataTypes.STRING,
            allowNull: true
        },
        estadio:{
            type: DataTypes.STRING,
            allowNull:true
        },
        aniofundacion:{
            type:DataTypes.INTEGER,
            allowNull:true
        }

    }, 
    {
        tableName: 'Equipos',
        timestamps:true
    }
);