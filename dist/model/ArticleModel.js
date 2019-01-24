"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db_connection_1 = require("../sql/db_connection");
const CategoryModel_1 = require("./CategoryModel");
// import { DraftModel } from './DraftModel';
exports.ArticleModel = db_connection_1.sequelize.define("t_article", {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    title: { type: Sequelize.STRING(200), allowNull: false },
    summary: Sequelize.STRING,
    category_id: Sequelize.INTEGER,
}, {
    timestamps: true
});
exports.ArticleModel.sync({ force: true });
exports.ArticleModel.belongsTo(CategoryModel_1.CategoryModel, { as: "Category", foreignKey: "category_id" });
// ArticleModel.belongsTo(DraftModel,{as:"Drafts",foreignKey:"id"})
CategoryModel_1.CategoryModel.hasMany(exports.ArticleModel, { as: 'Articles', foreignKey: 'category_id' });
// DraftModel.hasMany(ArticleModel,{as:'Articles',foreignKey:'id'});
//# sourceMappingURL=ArticleModel.js.map