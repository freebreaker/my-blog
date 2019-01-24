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
const jwt = require("jsonwebtoken");
const verifyToken = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const auth = ctx.get('Authorization');
    const token = auth;
    try {
        const payload = jwt.verify(token, "secret");
        ctx.name = payload.name;
        yield next();
    }
    catch (error) {
        ctx.throw(401, error);
    }
});
exports.default = verifyToken;
//# sourceMappingURL=verifyToken.js.map