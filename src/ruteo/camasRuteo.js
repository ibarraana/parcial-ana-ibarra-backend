import { Router } from "express"
import { Camas } from '../models/camas.js'

export const CamasRuteo = Router();

// Lo mismo que para departamentos, me trae los empleado poniendo /empleados en el navegador
CamasRuteo.get('/', async (req, res) => {
    try {
        // El metodo findAll trae toda la informacion de la base de datos
        res.json(await Camas.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});