// SALA HOSPITALIZACION { (PK)numeroSala, idDepartamento(FK), nombreSala }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import Departamentos from './departamentos.js';

const SalaHospitalizacion = sequelize.define('SalaHospitalizacion', {
  numeroSala: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  idDepartamento: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Departamentos,
        key: 'idDepartamento'
    }
  },
  nombreSala: { 
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default SalaHospitalizacion;

