import { Router } from "express"
import { PacientesRuteo } from './pacientesRuteo.js'

const ruteo = Router()

// Profe para esto por motivos de tiempo solo hago GET para traer los datos nomas

ruteo.use('/paciente', PacientesRuteo)

export default ruteo