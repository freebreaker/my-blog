import { ArticleModel } from '../model/ArticleModel';
import { DraftModel } from '../model/DraftModel';

export let getArticleList = async(ctx:any,next:any)=>{   // 显示所有person

    const {category_id} = ctx.request.query

    const res = await ArticleModel.findAll({
        where: {
            "category_id": category_id
        }
    })

    ctx.body = res;

}

export let postArticle = async(ctx:any,next:any)=>{  // 发表文章

    const {articleId,content,title,category}:{articleId:string,content:string,title:string,category:number} =ctx.request.body

    if(content&&title&&category){
        // 插入数据
        const ifHasArticleId = await ArticleModel.findById(articleId)

        let res;

        if(ifHasArticleId===""){
            res = await ArticleModel.create({
                id:articleId,
                "title":title,
                summary:content,
                category_id:category
            }).then(()=>{
                DraftModel.update({
                    "published":true
                },{
                    'where':{id:articleId}
                })
            })
        }else{
            res = await ArticleModel.update({
                "title":title,
                summary:content,
                category_id:category
            },{
                'where':{id:articleId}
            }).then(()=>{
                DraftModel.update({
                    "published":true
                },{
                    'where':{id:articleId}
                })
            })
        }

        ctx.body = {
            success:true,
            msg:"发表成功",
            data:res
        }

    }else{
        ctx.body = {
            success:false,
            msg:"输入信息不全"
        }
    }

    

}

export let getArticle = async(ctx:any,next:any)=>{   // 查询文章
    const {id} = ctx.request.query
    console.log(id)
    const res = await ArticleModel.find({
        where:{
            "id":id
        }
    })

    ctx.body = res

}

