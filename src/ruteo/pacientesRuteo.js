/*import { Router } from "express"
import { Pacientes } from '../models/pacientes.js'

export const  PacienteRuteo = Router();

// Lo mismo que para departamentos, me trae los empleado poniendo /habilidades en el navegador
PacienteRuteo.get('/', async (req, res) => {
    try {
        // El metodo findAll trae toda la informacion de la base de datos
        res.json(await Pacientes.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});*/