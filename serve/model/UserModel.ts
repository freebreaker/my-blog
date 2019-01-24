
import * as Sequelize from 'sequelize';
import {sequelize} from '../sql/db_connection';
// import {CategoryModel} from './CategoryModel';

export const UserModel = sequelize.define("t_users",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true,
        defaultValue: Sequelize.UUIDV1
    }, 
    username:Sequelize.STRING,
    phone:Sequelize.STRING,
    password:Sequelize.STRING,
    token:Sequelize.STRING
},
{
    timestamps: true
})


// UserModel.sync({force:true})