// Departamentos { (PK)idDepartamento, nombreDepartamento, jefeDepartamentoId(FK)?? }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Departamentos = sequelize.define('Departamentos', {
  idDepartamento: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  nombreDepartamento: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  jefeDepartamentoId: { 
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Departamentos;


