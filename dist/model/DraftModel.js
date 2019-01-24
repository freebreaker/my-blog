"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db_connection_1 = require("../sql/db_connection");
// import {CategoryModel} from './CategoryModel';
exports.DraftModel = db_connection_1.sequelize.define("t_draft", {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    title: { type: Sequelize.STRING(200), allowNull: false },
    markdown: Sequelize.STRING,
    published: Sequelize.BOOLEAN
}, {
    timestamps: true
});
exports.DraftModel.sync({ force: true });
// ArticleModel.belongsTo(CategoryModel,{as:"Category",foreignKey:"category_id"})
// CategoryModel.hasMany(ArticleModel,{as:'Articles',foreignKey:'category_id'});
//# sourceMappingURL=DraftModel.js.map