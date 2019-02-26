import axios from "../util/Axios";
import {changeLogInBoxShow} from './logInBox'

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
            if(!res.data.success&&res.data.code ===10000){
                dispatch(changeLogInBoxShow(true))
            }
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
            if(!res.data.success&&res.data.code ===10000){
                dispatch(changeLogInBoxShow(true))
            }else{
                dispatch({
                    type:"STORE_DRAFT_TITLE",
                    payload:res.data.title
                })
                dispatch({
                    type:"STORE_DRAFT_CONTENT",
                    payload:res.data.markdown
                })
            }

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
            if(!res.data.success&&res.data.code ===10000){
                dispatch(changeLogInBoxShow(true))
            }
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


export const getDraftList =()=>(
    (dispatch:any)=>(
        axios({
            method:"get",
            url:"/draftList",
            withCredentials:true
        })
        .then(res=>{
            if(!res.data.success&&res.data.code ===10000){
                dispatch(changeLogInBoxShow(true))
            }else{
                dispatch({
                    type:"STORE_DRAFTLIST",
                    payload:res.data
                })
            }

        })
    )
)


export const deleteDraft =(draftId:string)=>(

    (dispatch:any)=>(
        axios({
            method:"post",
            url:"/deleteDraft",
            data:{
                "draftId":draftId
            },
            withCredentials:true
        })
        .then(res=>{
            if(!res.data.success&&res.data.code ===10000){
                dispatch(changeLogInBoxShow(true))
            }else{
                dispatch({
                    type:"STORE_DRAFTLIST",
                    payload:res.data.data
                })
            }

        })
    )
)