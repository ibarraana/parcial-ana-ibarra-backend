import { Router } from "express"
import { Departamentos } from '../models/departamentos.js'

export const DepartamentosRuteo = Router();

DepartamentosRuteo.get('/', async (req, res) => {
    try {
        // El metodo findAll trae toda la informacion de la base de datos
        res.json(await Departamentos.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});