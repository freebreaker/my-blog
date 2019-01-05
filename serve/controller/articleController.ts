import { ArticleModel } from '../model/ArticleModel';
import {v1} from 'node-uuid';

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

    const {content,title,category}:{content:string,title:string,category:number} =ctx.request.body

    if(content&&title&&category){
        // 插入数据
        const res = await ArticleModel.create({
            id:v1(),
            "title":title,
            summary:content,
            category_id:category
        })

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

