// EnfermerosSalas

import { Router } from "express"
import { EnfermerosSalas } from '../models/enfermerosSalas.js'

export const EnfermerosSalasRuteo = Router();

// Lo mismo que para departamentos, me trae los empleado poniendo /empleados en el navegador
EnfermerosSalasRuteo.get('/', async (req, res) => {
    try {
        // El metodo findAll trae toda la informacion de la base de datos
        res.json(await EnfermerosSalas.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});