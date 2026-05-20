// ENFERMERO { (PK)codigoEnfermero, nombre }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Enfermeros = sequelize.define('Enfermeros', {
  codigoEnfermero: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  nombre: { 
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Enfermeros;