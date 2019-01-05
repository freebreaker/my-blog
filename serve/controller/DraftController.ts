
import { DraftModel } from '../model/DraftModel';

export let getDraftList = async(ctx:any,next:any)=>{  // 标签list

    const res = await DraftModel.findAll()

    ctx.body = res

}