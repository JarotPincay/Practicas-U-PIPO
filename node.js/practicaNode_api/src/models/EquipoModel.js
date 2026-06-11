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
            type: DataTypes.STRING(10),
            allowNull: false,
    
        },
        ciudad:{
            type: DataTypes.STRING(10),
            allowNull:true
        },
        pais:{
            type: DataTypes.STRING(10),
            allowNull: true
        },
        estadio:{
            type: DataTypes.STRING(10),
            allowNull:true
        },
        aniofundacion:{
            type:DataTypes.INTEGER(4),
            allowNull:true
        }

    }, 
    {
        tableName: 'Equipos',
        timestamps:true
    }
);