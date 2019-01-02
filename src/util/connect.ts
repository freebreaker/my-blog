import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {storeArticle} from 'src/actions/index';

function Connect(p1:string){
    return (target:any)=>{
        connect(
            state=>state,
            dispatch=>bindActionCreators(storeArticle,dispatch)
        )    
    }
}

export default Connect
