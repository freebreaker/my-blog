
import * as Sequelize from 'sequelize';
import {sequelize} from '../sql/db_connection';
// import {CategoryModel} from './CategoryModel';

export const DraftModel = sequelize.define("t_draft",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true,
        defaultValue: Sequelize.UUIDV4
    }, 
    title:{type:Sequelize.STRING(200),allowNull:false},
    summary:Sequelize.STRING,
    published:Sequelize.BOOLEAN,
    category_id:Sequelize.INTEGER
},
{
    timestamps: true
})

DraftModel.sync({force:true})

// ArticleModel.belongsTo(CategoryModel,{as:"Category",foreignKey:"category_id"})

// CategoryModel.hasMany(ArticleModel,{as:'Articles',foreignKey:'category_id'});


