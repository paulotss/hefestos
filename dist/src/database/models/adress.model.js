"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const users_model_1 = __importDefault(require("./users.model"));
class Adress extends sequelize_1.Model {
}
Adress.init({
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: sequelize_1.INTEGER,
    },
    cep: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    state: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    country: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    city: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    complement: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    adress: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    userId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    }
}, {
    sequelize: _1.default,
    modelName: 'adress',
    timestamps: true,
    tableName: 'adresses',
});
Adress.belongsTo(users_model_1.default, { foreignKey: 'userId', as: 'adress' });
exports.default = Adress;
