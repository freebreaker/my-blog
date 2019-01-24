"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../model/UserModel");
const node_uuid_1 = require("node-uuid");
const jwt = require("jsonwebtoken");
exports.LogIn = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const auth = ctx.get("Authorization");
    if (auth !== "undefined") {
        const verifiedPayload = jwt.verify(auth, "secret");
        const result = yield UserModel_1.UserModel.findOne({
            where: {
                "phone": verifiedPayload.name
            }
        });
        if (result.token === auth) {
            console.log("token success");
            ctx.body = {
                success: true,
                msg: "已登录"
            };
        }
    }
    else {
        const { phone, password } = ctx.request.body;
        const payload = { "name": phone };
        const res = yield UserModel_1.UserModel.findOne({
            where: {
                "phone": phone,
                "password": password
            }
        });
        if (res) {
            const token = jwt.sign(payload, "secret", {
                expiresIn: Math.floor(Date.now() / 1000) + 24 * 60 * 60
            });
            try {
                yield UserModel_1.UserModel.update({ "token": token }, {
                    "where": {
                        "phone": phone
                    }
                });
                ctx.status = 200;
                ctx.body = {
                    success: true,
                    "token": token,
                    msg: "登录成功"
                };
            }
            catch (error) {
                // 无法返回token
                ctx.status = 401;
                ctx.body = {
                    'error': {
                        'type': "ERROR",
                        'message': error
                    }
                };
            }
        }
        else {
            ctx.status = 400;
            ctx.body = {
                success: false,
                msg: "账号或密码错误！"
            };
        }
    }
});
exports.Register = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const { username, phone, password } = ctx.request.body;
    const res = yield UserModel_1.UserModel.create({
        id: node_uuid_1.v1(),
        "username": username,
        "phone": phone,
        "password": password,
        token: ""
    });
    ctx.body = {
        success: true,
        data: res,
        msg: "注册成功"
    };
});
//# sourceMappingURL=UserController.js.map