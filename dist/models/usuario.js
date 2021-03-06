"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario = connection_1.default.define('Usuario', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "el campo email es requerido" },
            isEmail: { msg: "Debe ser un email válido" },
        },
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = usuario;
//# sourceMappingURL=usuario.js.map