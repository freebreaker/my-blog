
import * as Sequelize from 'sequelize';
import {sequelize} from '../sql/db_connection';

export const CategoryModel = sequelize.define("t_category",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true,
        defaultValue: Sequelize.UUIDV4
    }, 
    name: {type:Sequelize.STRING(50),allowNull:false},
    createdAt: Sequelize.DATEONLY,
    updatedAt: Sequelize.DATEONLY,
},
{
    timestamps: true
})

