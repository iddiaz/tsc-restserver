import { DataTypes } from 'sequelize';
import db from '../db/connection';

const usuario = db.define('Usuario', {
   nombre: {
      type: DataTypes.STRING
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "el campo email es requerido" },
        isEmail: { msg: "Debe ser un email válido"},
        
      },
   },
   estado: {
      type: DataTypes.BOOLEAN
   }

});

export default usuario;