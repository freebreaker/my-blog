"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db_connection_1 = require("../sql/db_connection");
exports.CategoryModel = db_connection_1.sequelize.define("t_category", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        defaultValue: 1
    },
    name: { type: Sequelize.STRING(50), allowNull: false },
    createdAt: Sequelize.DATEONLY,
    updatedAt: Sequelize.DATEONLY,
}, {
    timestamps: true
});
exports.CategoryModel.sync({ force: true });
//# sourceMappingURL=CategoryModel.js.map