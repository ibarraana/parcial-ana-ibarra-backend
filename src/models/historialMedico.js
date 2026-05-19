// HistorialMedico { (PK)idHistorialMedico,descripción,dniPaciente(FK) }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import Paciente from './pacientes.js'

const HistorialMedico = sequelize.define('HistorialMedico', {
  idHistorialMedico: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  descripción: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  dniPaciente: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
            model: Paciente,
            key: 'dniPaciente'
    }
  }
});

export default HistorialMedico;


