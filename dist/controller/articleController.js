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
const ArticleModel_1 = require("../model/ArticleModel");
const DraftModel_1 = require("../model/DraftModel");
exports.getArticleList = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const { category_id } = ctx.request.query;
    const res = yield ArticleModel_1.ArticleModel.findAll({
        where: {
            "category_id": category_id
        }
    });
    ctx.body = res;
});
exports.postArticle = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const { articleId, content, title, category } = ctx.request.body;
    if (content && title && category) {
        // 插入数据
        const ifHasArticleId = yield ArticleModel_1.ArticleModel.findById(articleId);
        console.log("ddddddddddddddddd" + ifHasArticleId);
        let res;
        if (!ifHasArticleId) {
            res = yield ArticleModel_1.ArticleModel.create({
                id: articleId,
                "title": title,
                summary: content,
                category_id: category
            }).then(() => {
                DraftModel_1.DraftModel.update({
                    "published": true
                }, {
                    'where': { id: articleId }
                });
            });
        }
        else {
            res = yield ArticleModel_1.ArticleModel.update({
                "title": title,
                summary: content,
                category_id: category
            }, {
                'where': { id: articleId }
            }).then(() => {
                DraftModel_1.DraftModel.update({
                    "published": true
                }, {
                    'where': { id: articleId }
                });
            });
        }
        ctx.body = {
            success: true,
            msg: "发表成功",
            data: res
        };
    }
    else {
        ctx.body = {
            success: false,
            msg: "输入信息不全"
        };
    }
});
exports.getArticle = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const { id } = ctx.request.query;
    console.log(id);
    const res = yield ArticleModel_1.ArticleModel.find({
        where: {
            "id": id
        }
    });
    ctx.body = res;
});
//# sourceMappingURL=articleController.js.map