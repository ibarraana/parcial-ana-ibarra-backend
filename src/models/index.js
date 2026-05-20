import Pacientes from './pacientes.js' 
import HistorialMedico from './historialMedico.js'
import Departamentos from './departamentos.js'
import Especialidad from './especialidad.js'
import Medicos from './medicos.js' 
import MedicosDepartamentos from './medicosDepartamentos.js'
import PacientesCitasMedicas from './pacientesCitasMedicas.js'
import SalaHospitalizacion from './salaHospitalizacion.js'
import Estados from './estados.js'
import Camas from './camas.js'
import Enfermeros from './enfermeros.js'
import CamasPacientes from './camasPacientes.js'
import EnfermerosSalas from './enfermerosSalas.js'
import Tratamientos from './tratamientos.js'

HistorialMedico.belongsTo(Pacientes, { foreignKey: 'dniPaciente' })
Pacientes.hasMany(HistorialMedico, { foreignKey: 'dniPaciente' })

Medicos.belongsTo(Especialidad, { foreignKey: 'codigoEspecialidad' })
Especialidad.hasMany(Medicos, { foreignKey: 'codigoEspecialidad' })

MedicosDepartamentos.belongsTo(Medicos, { foreignKey: 'MedicosDepartamentos' })
Medicos.hasMany(MedicosDepartamentos, { foreignKey: 'MedicosDepartamentos' })

Medicos.belongsTo(Especialidad, { foreignKey: 'idDepartamento' })
Departamentos.hasMany(Medicos, { foreignKey: 'idDepartamento' })

PacientesCitasMedicas.belongsTo(Medicos, { foreignKey: 'numeroMatriculaMedico' })
Medicos.hasMany(PacientesCitasMedicas, { foreignKey: 'numeroMatriculaMedico' })

PacientesCitasMedicas.belongsTo(Pacientes, { foreignKey: 'dniPaciente' })
Pacientes.hasMany(PacientesCitasMedicas, { foreignKey: 'dniPaciente' })

PacientesCitasMedicas.belongsTo(Departamentos, { foreignKey: 'idDepartamento' })
Departamentos.hasMany(PacientesCitasMedicas, { foreignKey: 'idDepartamento' })

SalaHospitalizacion.belongsTo(Departamentos, { foreignKey: 'idDepartamento' })
Departamentos.hasMany(SalaHospitalizacion, { foreignKey: 'idDepartamento' })

Camas.belongsTo(Estados, { foreignKey: 'codigoEstado' })
Estados.hasMany(Camas, { foreignKey: 'codigoEstado' })

CamasPacientes.belongsTo(Camas, { foreignKey: 'codigoCama' })
Camas.hasMany(CamasPacientes, { foreignKey: 'codigoCama' })

CamasPacientes.belongsTo(Pacientes, { foreignKey: 'dniPaciente' })
Pacientes.hasMany(CamasPacientes, { foreignKey: 'dniPaciente' })

Camas.belongsTo(SalaHospitalizacion, { foreignKey: 'numeroSala' })
SalaHospitalizacion.hasMany(Camas, { foreignKey: 'numeroSala' })

EnfermerosSalas.belongsTo(SalaHospitalizacion, { foreignKey: 'numeroSala' })
SalaHospitalizacion.hasMany(EnfermerosSalas, { foreignKey: 'numeroSala' })

EnfermerosSalas.belongsTo(Enfermeros, { foreignKey: 'codigoEnfermero' })
Enfermeros.hasMany(EnfermerosSalas, { foreignKey: 'codigoEnfermero' })

Tratamientos.belongsTo(HistorialMedico, { foreignKey: 'idHistorialMedico' })
HistorialMedico.hasMany(Tratamientos, { foreignKey: 'idHistorialMedico' })

Tratamientos.belongsTo(Medicos, { foreignKey: 'numeroMatriculaMedico' })
Medicos.hasMany(Tratamientos, { foreignKey: 'numeroMatriculaMedico' })

Tratamientos.belongsTo(Enfermeros, { foreignKey: 'codigoEnfermero' })
Enfermeros.hasMany(Tratamientos, { foreignKey: 'codigoEnfermero' })

export {
    Pacientes,
    HistorialMedico,
    Departamentos,
    Especialidad,
    Medicos,
    MedicosDepartamentos,
    PacientesCitasMedicas,
    SalaHospitalizacion,
    Estados,
    Camas,
    Enfermeros,
    CamasPacientes,
    EnfermerosSalas,
    Tratamientos
}
