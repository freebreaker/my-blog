import * as Router from 'koa-router';
import renderFullPage from './renderFullPage';
import {getArticleList,postArticle,getArticle} from './controller/articleController'
import { getCategoryList } from './controller/CategoryController';
import { getDraftList } from './controller/DraftController';

const router = new Router()

router.get('/',async(ctx,next:any)=>{   // 服务端渲染首页
    
    const book = {
        id:1
    }

    renderFullPage(ctx,book);

})

router.post('/article',postArticle)

router.get('/category',getArticleList)  // id 具体哪个类型的category

router.get('/categorylist',getCategoryList)

router.get('/p',getArticle)

router.get('/draftList',getDraftList)

export default router;