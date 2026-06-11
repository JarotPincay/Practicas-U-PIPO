import { DataType} from "sequelize";
import { sequelize } from "../config/db";

export const Equipo = sequelize.define(
    'Equipo', {
        id:{
            type: DataType.Integer,
            primaryKey:true,
            autoIncrement: true
        },
        nombre:{
            type: DataType.String(10),
            allowNull: false,
    
        },
        ciudad:{
            type: DataType.String(10),
            allowNull:true
        },
        pais:{
            type: DataType.String(10),
            allowNull: true
        },
        estadio:{
            type: DataType.String(10),
            allowNull:true
        },
        aniofundacion:{
            type:DataType.Integer(4),
            allowNull:true
        }

    }
);