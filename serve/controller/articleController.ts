import { ArticleModel } from '../model/ArticleModel';


export let getArticleList = async(ctx:any,next:any)=>{   // 显示所有person

    const res = await ArticleModel.findAll()

    ctx.body = res;

}

