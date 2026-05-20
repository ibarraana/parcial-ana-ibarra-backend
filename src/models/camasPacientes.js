// CAMASPACIENTES { (PK)codigoCama(FK), (PK)dniPaciente(FK), fechaDesde, fechaHasta }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import Camas from './camas.js';
import Pacientes from './pacientes.js';

const CamasPacientes = sequelize.define('CamasPacientes', {
  codigoCama: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    allowNull: false, 
    references: {
        model: Camas,
        key: 'codigoCama'
    }
  },
  dniPaciente: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false, 
    references: {
        model: Pacientes,
        key: 'dniPaciente'
    }
  },
  fechaDesde: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fechaHasta: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

export default CamasPacientes;
