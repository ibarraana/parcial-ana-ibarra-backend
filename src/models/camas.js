// CAMAS { (PK)codigoCama, descripción, codigoEstado(FK), numeroSala(FK) }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import Estados from './estados.js';
import SalaHospitalizacion from './salaHospitalizacion.js'

const Camas = sequelize.define('Camas', {
  codigoCama: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  descripción: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  codigoEstado: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Estados,
        key: 'codigoEstado'
    }
  },
  numeroSala: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: SalaHospitalizacion,
      key: 'numeroSala'
    }
  }
});

export default Camas;