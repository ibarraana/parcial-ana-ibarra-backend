import { ProductRuteo } from './productsRuteo.js'

const ruteo = Router()

// Profe para esto por motivos de tiempo solo hago GET para traer los datos nomas

ruteo.use('/products', ProductRuteo)

export default ruteo