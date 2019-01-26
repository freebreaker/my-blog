
import * as Sequelize from 'sequelize';
import {sequelize} from '../sql/db_connection';

export const CategoryModel = sequelize.define("t_category",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        defaultValue: 1
    }, 
    name: {type:Sequelize.STRING(50),allowNull:false},
    createdAt: Sequelize.DATEONLY,
    updatedAt: Sequelize.DATEONLY,
},
{
    timestamps: true
})

// CategoryModel.sync({force:true})