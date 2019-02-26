
interface ActionType {
    type:string,
    payload:boolean
}

const logInBoxReducer = (state={},action:ActionType) => {
    switch(action.type){
        case "CHANGE_LOGIN_BOX_SHOW":
            return Object.assign({},state,{
                show:action.payload
            })
        default:return state
    }
}

export default logInBoxReducer;
