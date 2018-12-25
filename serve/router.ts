import * as Router from 'koa-router';

import renderFullPage from './renderFullPage';

import {getArticleList} from './controller/articleController'

const router = new Router()

router.get('/',async(ctx,next:any)=>{   // 服务端渲染首页
    
    const book = {
        id:1
    }

    renderFullPage(ctx,book);

})

router.get('/category',getArticleList)


export default router;