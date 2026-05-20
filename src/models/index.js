import Paciente from './pacientes.js' 
import HistorialMedico from './historialMedico.js'
import Departamentos from './departamentos.js'
import Especialidad from './especialidad.js'
import Medicos from './medicos.js' 
import MedicosDepartamentos from './medicosDepartamentos.js'
import PacientesCitasMedicas from './pacientesCitasMedicas.js'

HistorialMedico.belongsTo(Paciente, { foreignKey: 'dniPaciente' })
Paciente.hasMany(HistorialMedico, { foreignKey: 'dniPaciente' })

Medicos.belongsTo(Especialidad, { foreignKey: 'codigoEspecialidad' })
Especialidad.hasMany(Medicos, { foreignKey: 'codigoEspecialidad' })

MedicosDepartamentos.belongsTo(Medicos, { foreignKey: 'MedicosDepartamentos' })
Medicos.hasMany(MedicosDepartamentos, { foreignKey: 'MedicosDepartamentos' })

Medicos.belongsTo(Especialidad, { foreignKey: 'idDepartamento' })
Departamentos.hasMany(Medicos, { foreignKey: 'idDepartamento' })

PacientesCitasMedicas.belongsTo(Medicos, { foreignKey: 'numeroMatriculaMedico' })
Medicos.hasMany(PacientesCitasMedicas, { foreignKey: 'numeroMatriculaMedico' })

PacientesCitasMedicas.belongsTo(Paciente, { foreignKey: 'dniPaciente' })
Paciente.hasMany(PacientesCitasMedicas, { foreignKey: 'dniPaciente' })

PacientesCitasMedicas.belongsTo(Departamentos, { foreignKey: 'idDepartamento' })
Departamentos.hasMany(PacientesCitasMedicas, { foreignKey: 'idDepartamento' })


export {
    Paciente,
    HistorialMedico,
    Departamentos,
    Especialidad,
    Medicos,
    MedicosDepartamentos,
    PacientesCitasMedicas
}
