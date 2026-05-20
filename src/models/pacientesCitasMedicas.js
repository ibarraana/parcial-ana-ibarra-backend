// PacientesCitasMedicas {(PK)idCitaMedica, fechaHora, dniPaciente(FK), numeroMatriculaMedico(FK)
// idDepartamento(FK), motivoConsulta, diagnosticoResumen }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import Pacientes from './pacientes.js';
import Medicos from './medicos.js';
import Departamentos from './departamentos.js'

const PacientesCitasMedicas = sequelize.define('PacientesCitasMedicas', {
  idCitaMedica: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  fechaHora: { 
    type: DataTypes.DATE, 
    allowNull: false
  },
  dniPaciente: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: {
        model: Pacientes,
        key: 'dniPaciente'
    }
  },
  numeroMatriculaMedico: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: {
        model: Medicos,
        key: 'numeroMatriculaMedico'
    }
  },
  idDepartamento: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: {
        model: Departamentos,
        key: 'idDepartamento'
    }
  },
  motivoConsulta: { 
    type: DataTypes.STRING, 
    allowNull: false
  },
  diagnosticoResumen: { 
    type: DataTypes.STRING, 
    allowNull: false
  }
});

export default PacientesCitasMedicas;
