
import * as Sequelize from 'sequelize';
import {sequelize} from '../sql/db_connection';
import {CategoryModel} from './CategoryModel';

export const ArticleModel = sequelize.define("t_article",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true,
        defaultValue: Sequelize.UUIDV4
    }, 
    title:{type:Sequelize.STRING(200),allowNull:false},
    summary:Sequelize.STRING,
    createdAt: Sequelize.DATEONLY,
    updatedAt: Sequelize.DATEONLY,
},
{
    timestamps: true
})

ArticleModel.belongsTo(CategoryModel,{as:"Category",foreignKey:"category_id"})

CategoryModel.hasMany(ArticleModel,{as:'Articles',foreignKey:'category_id'});


