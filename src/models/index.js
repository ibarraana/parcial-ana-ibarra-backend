import Paciente from './pacientes.js' 
import HistorialMedico from './historialMedico.js'

HistorialMedico.belongsTo(Paciente, { foreignKey: 'dniPaciente' })
Paciente.hasMany(HistorialMedico, { foreignKey: 'dniPaciente' })


export {
    Paciente,
    HistorialMedico  
}
