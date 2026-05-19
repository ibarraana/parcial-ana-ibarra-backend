// PACIENTE ( (PK)dniPaciente, nombre, fechaNacimiento, dirección, teléfono, datosContactoEmergencia )

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Pacientes = sequelize.define('Pacientes', {
  dniPaciente: { 
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  nombre: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  fechaNacimiento: { 
    type: DataTypes.DATE,
    allowNull: false
  }, 
  direccion: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  },
  datosContactoEmergencia: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Pacientes;

