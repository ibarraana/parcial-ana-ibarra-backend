import { Router } from "express"
import { Product } from '../models/products.js'

export const  ProductRuteo = Router();

// Lo mismo que para departamentos, me trae los empleado poniendo /habilidades en el navegador
ProductRuteo.get('/', async (req, res) => {
    try {
        // El metodo findAll trae toda la informacion de la base de datos
        res.json(await  Product.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});