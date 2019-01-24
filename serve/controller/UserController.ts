import { UserModel } from '../model/UserModel';
import {v1} from 'node-uuid';
import * as jwt from 'jsonwebtoken';

export let LogIn = async(ctx:any,next:any)=>{  // 标签list

    const auth = ctx.get("Authorization")

    if(auth!=="undefined"){

        const verifiedPayload:any = jwt.verify(auth,"secret")

        const result:any = await UserModel.findOne({
            where:{
                "phone":verifiedPayload.name
            }
        })

        if(result.token === auth){
            console.log("token success")
            ctx.body = {
                success:true,
                msg:"已登录"
            }
        }
    }else{

        const {phone,password} =ctx.request.body

        const payload = {"name":phone}

        const res = await UserModel.findOne({
            where:{
                "phone":phone,
                "password":password
            }
        })
    
        if(res){
            const token = jwt.sign(payload,"secret",{
                expiresIn: Math.floor(Date.now() / 1000) + 24 * 60 * 60
            })
            try{
                await UserModel.update({"token":token},{
                    "where":{
                        "phone":phone
                    }
                })
                
                ctx.status = 200;
    
                ctx.body = {
                    success:true,
                    "token":token,
                    msg:"登录成功"
                }
            }catch(error){
                // 无法返回token
                ctx.status = 401;
                ctx.body = {
                    'error': {
                        'type': "ERROR",
                        'message': error
                    }
                }
            }
        }else{
            ctx.status = 400;
            ctx.body = {
                success:false,
                msg:"账号或密码错误！"
            }
        }
    }
}


export let Register = async(ctx:any,next:any)=>{

    const {username,phone,password} = ctx.request.body

    const res = await UserModel.create({
        id:v1(),
        "username":username,
        "phone":phone,
        "password":password,
        token:""
    })

    ctx.body = {
        success:true,
        data:res,
        msg:"注册成功"
    }

}
