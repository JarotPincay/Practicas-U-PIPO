import { Equipo } from "../models/EquipoModel";

export const CreateEquipo = async(req,res)=>{
    try {
        const {nombre, ciudad, pais, aniofundacion, estadio } = req.body;
            if(!nombre || !ciudad ||!pais ||!aniofundacion ||!estadio){
                return res.status(400).json({
                    message: '==== ERROR AL INGRESAR POR FALTA DE DATOS ===='
                })
            }

            const nuevoequipo = await Equipo.create({
                nombre,ciudad,pais,estadio,aniofundacion
            });
            return res.status(201).json({
                message:('=====SE HA CREADO UN NUEVO INGRESO====')
            });

    } catch (error) {
        return res.status(500).json({
            message: 'Error en el servidor', error: error.message
        });
    }

};

