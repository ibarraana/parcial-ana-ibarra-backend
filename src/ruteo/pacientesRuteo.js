import { Router } from "express"
import { Pacientes } from '../models/index.js'

export const PacientesRuteo = Router();

// Lo mismo que para departamentos, me trae los empleado poniendo /empleados en el navegador
PacientesRuteo.get('/', async (req, res) => {
    try {
        // El metodo findAll trae toda la informacion de la base de datos
        res.json(await Pacientes.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});