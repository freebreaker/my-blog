"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db_connection_1 = require("../sql/db_connection");
// import {CategoryModel} from './CategoryModel';
exports.UserModel = db_connection_1.sequelize.define("t_users", {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
    },
    username: Sequelize.STRING,
    phone: Sequelize.STRING,
    password: Sequelize.STRING,
    token: Sequelize.STRING
}, {
    timestamps: true
});
// UserModel.sync({force:true})
//# sourceMappingURL=UserModel.js.map