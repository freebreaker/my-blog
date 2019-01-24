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
const Router = require("koa-router");
const renderFullPage_1 = require("./renderFullPage");
const articleController_1 = require("./controller/articleController");
const CategoryController_1 = require("./controller/CategoryController");
const DraftController_1 = require("./controller/DraftController");
const UserController_1 = require("./controller/UserController");
const verifyToken_1 = require("./middleware/verifyToken");
const router = new Router();
router.get('/', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const book = {
        id: 1
    };
    renderFullPage_1.default(ctx, book);
}));
router.post('/article', articleController_1.postArticle); // 发表文章
router.get('/category', articleController_1.getArticleList); // id 具体哪个类型的category
router.get('/categorylist', CategoryController_1.getCategoryList); // 获取tags
router.get('/p', articleController_1.getArticle); // 获取文章具体
router.get('/draftList', DraftController_1.getDraftList); // 获取草稿列表
router.get('/getDraft', DraftController_1.getDraft); // 获取草稿具体
router.post('/createDraft', verifyToken_1.default, DraftController_1.createDraft); // 发表草稿
router.post('/updateDraft', DraftController_1.updateDraft); // 更新草稿
router.post('/deleteDraft', DraftController_1.deleteDraft);
router.post('/login', UserController_1.LogIn); // 登录
router.post("/register", UserController_1.Register); // 注册
exports.default = router;
//# sourceMappingURL=router.js.map