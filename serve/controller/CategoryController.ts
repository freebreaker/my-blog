import { CategoryModel } from '../model/CategoryModel';

export let getCategoryList = async(ctx:any,next:any)=>{  // 标签list

    const res = await CategoryModel.findAll()

    ctx.body = res

}