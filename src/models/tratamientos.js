// TRATAMIENTOS { (PK)idHistorialMedico(FK), (PK)numeroMatriculaMedico(FK), (PK)codigoEnfermero(FK), fecha }


import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import HistorialMedico from './historialMedico.js';
import Medicos from './medicos.js';
import Enfermeros from './enfermeros.js'

const Tratamientos = sequelize.define('Tratamientos', {
  idHistorialMedico: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    allowNull: false,
    references: {
        model: HistorialMedico,
        key: 'idHistorialMedico'
    }
  },
  numeroMatriculaMedico: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
        model: Medicos,
        key: 'numeroMatriculaMedico'
    }
  },
  codigoEnfermero: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
        model: Enfermeros,
        key: 'codigoEnfermero'
    }
  },
  fecha: { 
    type: DataTypes.DATE,
    allowNull: false
  }
});

export default Tratamientos;