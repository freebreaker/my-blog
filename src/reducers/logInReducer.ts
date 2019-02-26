
interface ActionType {
    type:string,
    payload:boolean
}

const logInReducer = (state={},action:ActionType) => {
    switch(action.type){
        case "CHANGE_LOGIN_STATUS":
            return Object.assign({},state,{
                isLogIn:action.payload
            })
        default:return state
    }
}

export default logInReducer
