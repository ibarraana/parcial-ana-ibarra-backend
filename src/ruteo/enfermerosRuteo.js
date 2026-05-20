// Enfermeros

import { Router } from "express"
import { Enfermeros } from '../models/enfermeros.js'

export const EnfermerosRuteo = Router();

// Lo mismo que para departamentos, me trae los empleado poniendo /empleados en el navegador
EnfermerosRuteo.get('/', async (req, res) => {
    try {
        // El metodo findAll trae toda la informacion de la base de datos
        res.json(await Enfermeros.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});