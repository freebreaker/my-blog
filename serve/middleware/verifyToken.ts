import * as jwt from 'jsonwebtoken';

const verifyToken = async (ctx:any,next:any)=>{

    const auth = ctx.get('Authorization')

    const token = auth

    try{
        const payload:any = jwt.verify(token,"secret")

        ctx.name = payload.name

        await next()

    }catch(error){
        ctx.throw(401,error)
    }

}

export default verifyToken;