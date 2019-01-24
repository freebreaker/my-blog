"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db_connection_1 = require("../sql/db_connection");
// import {CategoryModel} from './CategoryModel';
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
// ArticleModel.belongsTo(CategoryModel)
// ArticleModel.belongsTo(DraftModel,{as:"Drafts",foreignKey:"id"})
// CategoryModel.hasMany(ArticleModel);
// DraftModel.hasMany(ArticleModel,{as:'Articles',foreignKey:'id'});
//# sourceMappingURL=ArticleModel.js.map