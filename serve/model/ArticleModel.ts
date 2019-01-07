
import * as Sequelize from 'sequelize';
import {sequelize} from '../sql/db_connection';
// import {CategoryModel} from './CategoryModel';
// import { DraftModel } from './DraftModel';


export const ArticleModel = sequelize.define("t_article",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true,
        defaultValue: Sequelize.UUIDV4
    }, 
    title:{type:Sequelize.STRING(200),allowNull:false},
    summary:Sequelize.STRING,
    category_id:Sequelize.INTEGER,
},
{
    timestamps: true
})

// sequelize.sync({force:true})

// ArticleModel.belongsTo(CategoryModel,{as:"Category",foreignKey:"category_id"})

// ArticleModel.belongsTo(DraftModel,{as:"Drafts",foreignKey:"id"})

// CategoryModel.hasMany(ArticleModel,{as:'Articles',foreignKey:'category_id'});

// DraftModel.hasMany(ArticleModel,{as:'Articles',foreignKey:'id'});

