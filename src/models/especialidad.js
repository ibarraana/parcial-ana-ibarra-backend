// ESPECIALIDAD { (PK)codigoEspecialidad, descripcion }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Especialidad = sequelize.define('Especialidad', {
  codigoEspecialidad: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: { 
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Especialidad;

