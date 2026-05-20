// Especialidad

import { Router } from "express"
import { Especialidad } from '../models/especialidad.js'

export const EspecialidadRuteo = Router();

// Lo mismo que para departamentos, me trae los empleado poniendo /empleados en el navegador
EspecialidadRuteo.get('/', async (req, res) => {
    try {
        // El metodo findAll trae toda la informacion de la base de datos
        res.json(await Especialidad.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});