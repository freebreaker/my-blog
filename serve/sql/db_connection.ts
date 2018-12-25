import mysqlConifg from './config'
import * as Sequelize from 'sequelize';

/**
 * @param {string} sql SQL语句
 * @param arg SQL语句插入语句的数据
 * @param callback SQL语句的回调
 */

export const sequelize = new Sequelize(mysqlConifg.database,mysqlConifg.user,mysqlConifg.password,{
    host: mysqlConifg.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
})


