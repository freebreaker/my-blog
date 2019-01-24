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
const DraftModel_1 = require("../model/DraftModel");
exports.getDraftList = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const res = yield DraftModel_1.DraftModel.findAll();
    ctx.body = res;
});
exports.createDraft = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const { draftId, title, markdown, published } = ctx.request.body;
    if (title || markdown) {
        // 插入数据
        const res = yield DraftModel_1.DraftModel.create({
            id: draftId,
            "title": title,
            "markdown": markdown,
            "published": published,
        });
        ctx.body = {
            success: true,
            msg: "保存成功",
            data: res
        };
    }
    else {
        ctx.body = {
            success: false,
            msg: "保存失败"
        };
    }
});
exports.getDraft = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const { id } = ctx.request.query;
    console.log(id);
    const res = yield DraftModel_1.DraftModel.find({
        where: {
            "id": id
        }
    });
    ctx.body = res;
});
exports.updateDraft = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const { draftId, title, markdown, published } = ctx.request.body;
    if (draftId) {
        // 插入数据
        const res = yield DraftModel_1.DraftModel.update({
            "title": title,
            "markdown": markdown,
            "published": published
        }, {
            'where': { id: draftId }
        });
        ctx.body = {
            success: true,
            msg: "更新成功",
            data: res
        };
    }
    else {
        ctx.body = {
            success: false,
            msg: "更新失败"
        };
    }
});
exports.deleteDraft = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const { draftId } = ctx.request.body;
    if (draftId) {
        yield DraftModel_1.DraftModel.destroy({
            'where': { 'id': draftId }
        });
        const res = yield DraftModel_1.DraftModel.findAll();
        ctx.body = {
            success: true,
            msg: "删除成功",
            data: res
        };
    }
    else {
        ctx.body = {
            success: false,
            msg: "删除失败"
        };
    }
});
//# sourceMappingURL=DraftController.js.map