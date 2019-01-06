
import axios from 'axios';

export const createDraft = (draftMsgs:{
        draftId:string,
        title:string,
        markdown:string,
        published:boolean
    })=>(
    (dispatch:any)=>(
        axios({
            method:"post",
            url:"/createDraft",
            data:{
                draftId:draftMsgs.draftId,
                title:draftMsgs.title,
                markdown:draftMsgs.markdown,
                published:draftMsgs.published
            },
            withCredentials:true
        })
        .then(res=>{
            console.log(res)
        })
    )
)

export const getDraft = (getDraftParams:{
        draftId:string
    })=>(
    (dispatch:any)=>(
        axios({
            method:"get",
            url:`/getDraft?id=${getDraftParams.draftId}`
        })
        .then(res=>{
            console.log(12313)
            console.log(res)
            dispatch({
                type:"STORE_DRAFT_TITLE",
                payload:res.data.title
            })
            dispatch({
                type:"STORE_DRAFT_CONTENT",
                payload:res.data.markdown
            })
        })
    )
)


export const updateDraft = (draftMsgs:{
        draftId:string,
        title:string,
        markdown:string,
        published:boolean
    })=>(
    (dispatch:any)=>(
        axios({
            method:"post",
            url:"/updateDraft",
            data:{
                draftId:draftMsgs.draftId,
                title:draftMsgs.title,
                markdown:draftMsgs.markdown,
                published:draftMsgs.published
            },
            withCredentials:true
        })
        .then(res=>{
            console.log(res)
        })
    )
)

export const storeDraft = (storeDraftMsgs:{
        title:string,
        markdown:string
    })=>(
        (dispatch:any)=>(
            dispatch({
                type:"STORE_DRAFT",
                payload:storeDraftMsgs
            })
        )
    )