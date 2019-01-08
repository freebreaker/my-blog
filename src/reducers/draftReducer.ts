
interface ActionType {
    type:string,
    payload:any
}

const draftReducer = (state={},action:ActionType) => {
    switch(action.type){
        case "STORE_DRAFT_CONTENT":
            return Object.assign({},state,{
                content:action.payload
            })
        case "STORE_DRAFT_TITLE":
            return Object.assign({},state,{
                title:action.payload
            })
        case "STORE_DRAFT":
            return Object.assign({},state,{
                title:action.payload.title,
                content:action.payload.markdown
            })
        case "STORE_DRAFTLIST":
            return Object.assign({},state,{
                draftList:action.payload
            })
        default:return state
    }
}

export default draftReducer;