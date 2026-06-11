import {Router} from "express";
import {CreateEquipo,FindById,GetAllEqipo} from "../controllers/EquipoController.js";

    const router = Router();
    router.post('/equipos/agg',CreateEquipo);
    router.get('/equipos',GetAllEqipo);
    router.get('/equipos/:id',FindById);

    export default router;