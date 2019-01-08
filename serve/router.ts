import * as Router from 'koa-router';
import renderFullPage from './renderFullPage';
import {getArticleList,postArticle,getArticle} from './controller/articleController';
import { getCategoryList } from './controller/CategoryController';
import { getDraftList,createDraft,getDraft,updateDraft,deleteDraft} from './controller/DraftController';


const router = new Router()

router.get('/',async(ctx,next:any)=>{   // 服务端渲染首页
    
    const book = {
        id:1
    }

    renderFullPage(ctx,book);

})

router.post('/article',postArticle)  // 发表文章

router.get('/category',getArticleList)  // id 具体哪个类型的category

router.get('/categorylist',getCategoryList)  // 获取tags

router.get('/p',getArticle)  // 获取文章具体
 
router.get('/draftList',getDraftList)  // 获取草稿列表

router.get('/getDraft',getDraft)   // 获取草稿具体

router.post('/createDraft',createDraft)  // 发表草稿

router.post('/updateDraft',updateDraft)  // 更新草稿

router.post('/deleteDraft',deleteDraft)

export default router;