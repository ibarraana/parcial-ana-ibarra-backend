// ENFERMEROSALAS { (PK)codigoEnfermero(FK), (PK)numeroSala(FK), horaIngreso, horaEgreso }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import Enfermeros from './enfermeros.js';
import SalaHospitalizacion from './salaHospitalizacion.js';

const EnfermerosSalas = sequelize.define('EnfermerosSalas', {
  codigoEnfermero: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    allowNull: false,
    references: {
        model: Enfermeros,
        key: 'codigoEnfermero'
    }
  },
  numeroSala: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
        model: SalaHospitalizacion,
        key: 'numeroSala'
    }
  },
  horaIngreso: { 
    type: DataTypes.DATE,
    allowNull: false
  },
  horaEgreso: { 
    type: DataTypes.DATE,
    allowNull: false
  }
});

export default EnfermerosSalas;