import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from 'src/actions/index';

// function Connect(p1:string){
//     return (target:any)=>{
//         connect(
//             state=>state,
//             dispatch=>bindActionCreators(action,dispatch)
//         )    
//     }
// }

export default connect(
    state=>state,
    dispatch=>bindActionCreators(action,dispatch)
)   