// CamasPacientes
import { Router } from "express"
import { CamasPacientes } from '../models/camasPacientes.js'

export const CamasPacientesRuteo = Router();

// Lo mismo que para departamentos, me trae los empleado poniendo /empleados en el navegador
CamasPacientesRuteo.get('/', async (req, res) => {
    try {
        // El metodo findAll trae toda la informacion de la base de datos
        res.json(await CamasPacientes.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});