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

export const GetAllEqipo=async(req,res)=>{
    try {
        const equipos = await Equipo.findAll();
        return res.status(200).json({
                equipos
        });


    } catch (error) {
        return res.status(500).json({
            message:'ERROR EN EL SERVIDOR ',error:error.message
        });
    }



};


export const FindById = async(req,res)=>{
    try {
        const {id} = req.params;
        const eq = await Equipo.findByPk(id);

         if(!eq){
            res.status(404).json({
                message:'===NO SE ENCUENTRA EL ID ==='
            });
         }

         res.status(200).json({
            meesage:'==== USUARIO ENCONTRADO=====',
            data:{
                    id: eq.id,
                    nombre: eq.nombre,
                    pais: eq.pais,
                    año: eq.aniofundacion,
                    estadio: eq.estadio

            }
         })




    } catch (error) {
        console.error(' Error al buscar por ID:', error);
         return res.status(500).json({ message: 'Error en el servidor', error: error.message });
    }
};