// MedicosDepartamentos { (PK)numeroMatriculaMedico(FK), (PK)idDepartamento(FK) }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import Departamentos from './departamentos.js';
import Medicos from './medicos.js'

const MedicosDepartamentos = sequelize.define('MedicosDepartamentos', {
  numeroMatriculaMedico: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    references: {
        model: Medicos,
        key: 'numeroMatriculaMedico'
    }
  },
  idDepartamento: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    references: {
        model: Departamentos,
        key: 'idDepartamento'
    }
  }
});

export default MedicosDepartamentos;

