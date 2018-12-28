
interface ActionType {
    type:string,
    payload:any
}

const articleReducer = (state={},action:ActionType) => {
    switch(action.type){
        case "STORE_ARTICLE_CONTENT":
            return Object.assign({},state,{
                content:action.payload
            })
        case "STORE_ARTICLE_TITLE":
            return Object.assign({},state,{
                title:action.payload
            })
        default:return state
    }
}

export default articleReducer;
