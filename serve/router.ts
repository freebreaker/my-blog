import * as Router from 'koa-router';
import renderFullPage from './renderFullPage';
import {getArticleList,postArticle,getArticle} from './controller/articleController';
import { getCategoryList } from './controller/CategoryController';
import { getDraftList,createDraft,getDraft,updateDraft,deleteDraft} from './controller/DraftController';
import { LogIn, Register} from './controller/UserController';
import verifyToken from './middleware/verifyToken'

const router = new Router()

router.get('/',async(ctx,next:any)=>{   // 服务端渲染首页
    
    const book = {
        id:1
    }

    renderFullPage(ctx,book);

})

router.post('/article',verifyToken,postArticle)  // 发表文章

router.get('/category',getArticleList)  // id 具体哪个类型的category

router.get('/categorylist',getCategoryList)  // 获取tags

router.get('/p',getArticle)  // 获取文章具体
 
router.get('/draftList',verifyToken,getDraftList)  // 获取草稿列表

router.get('/getDraft',verifyToken,getDraft)   // 获取草稿具体

router.post('/createDraft',verifyToken,createDraft)  // 发表草稿

router.post('/updateDraft',verifyToken,updateDraft)  // 更新草稿

router.post('/deleteDraft',verifyToken,deleteDraft)

router.post('/login',LogIn)  // 登录

router.post("/register",Register)  // 注册


export default router;