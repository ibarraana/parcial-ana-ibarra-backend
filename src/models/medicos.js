// MEDICOS { (PK)numeroMatriculaMedico, nombre, codigoEspecialidad(FK), telefonoConctacto }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import Especialidad from './especialidad.js'

const Medicos = sequelize.define('Medicos', {
  numeroMatriculaMedico: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  nombre: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  codigoEspecialidad: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: {
        model: Especialidad,
        key: 'codigoEspecialidad'
    }
  }, 
  telefonoConctacto: { 
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Medicos;

