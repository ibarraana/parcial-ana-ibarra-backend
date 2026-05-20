// ESTADOS { (PK)codigoEstado, descripción }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Estados = sequelize.define('Estados', {
  codigoEstado: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  descripción: { 
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Estados;
