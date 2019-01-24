"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const Sequelize = require("sequelize");
/**
 * @param {string} sql SQL语句
 * @param arg SQL语句插入语句的数据
 * @param callback SQL语句的回调
 */
exports.sequelize = new Sequelize(config_1.default.database, config_1.default.user, config_1.default.password, {
    host: config_1.default.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});
//# sourceMappingURL=db_connection.js.map