"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: sequelize_1.INTEGER,
    },
    firstName: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    lastName: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    email: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    password: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    cellPhone: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    wahtsapp: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'user',
    timestamps: true,
    tableName: 'users'
});
exports.default = User;
