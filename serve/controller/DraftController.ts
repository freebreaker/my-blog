
import { DraftModel } from '../model/DraftModel';

export let getDraftList = async(ctx:any,next:any)=>{  // 标签list

    const res = await DraftModel.findAll()

    ctx.body = res

}

export let createDraft = async(ctx:any,next:any)=>{

    const {draftId,title,markdown,published} =ctx.request.body

    if(title||markdown){
        // 插入数据
        const res = await DraftModel.create({
            id:draftId, 
            "title":title,
            "markdown":markdown,
            "published":published,
        })

        ctx.body = {
            success:true,
            msg:"保存成功",
            data:res
        }

    }else{
        ctx.body = {
            success:false,
            msg:"保存失败"
        }
    }

}


export let getDraft = async(ctx:any,next:any)=>{ 
    const {id} = ctx.request.query
    console.log(id)
    const res = await DraftModel.find({
        where:{
            "id":id
        }
    })

    ctx.body = res

}

export let updateDraft = async(ctx:any,next:any)=>{  // 发表文章

    const {draftId,title,markdown,published}:{draftId:string,markdown:string,title:string,published:boolean} = ctx.request.body

    if(draftId){
        // 插入数据
        const res = await DraftModel.update({
            "title":title,
            "markdown":markdown,
            "published":published
        },{
            'where':{id:draftId}
        })

        ctx.body = {
            success:true,
            msg:"更新成功",
            data:res
        }

    }else{
        ctx.body = {
            success:false,
            msg:"更新失败"
        }
    }

}

export let deleteDraft = async(ctx:any,next:any)=>{  // 发表文章

    const {draftId} = ctx.request.body

    if(draftId){
        
        await DraftModel.destroy({
            'where':{'id':draftId}
        })

        const res = await DraftModel.findAll()

        ctx.body = {
            success:true,
            msg:"删除成功",
            data:res
        }

    }else{
        ctx.body = {
            success:false,
            msg:"删除失败"
        }
    }

}