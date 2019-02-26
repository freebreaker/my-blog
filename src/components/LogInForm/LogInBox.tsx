import * as React from 'react';
import {connect} from 'react-redux';
import './LoginBox.css';
import RegisterOrLogInForm from './RegisterOrLogInForm';
import {changeLogInStatus} from 'src/actions/login'
import {changeLogInBoxShow} from 'src/actions/logInBox'

interface LoginFormWrapProps {
  login:{
    isLogIn:boolean
  },
  loginBox:{
    show:boolean
  },
  changeLogInStatus:(value:boolean)=>void,
  changeLogInBoxShow:(value:boolean)=>void
}


class LoginFormWrap extends React.Component<LoginFormWrapProps,any> {

    constructor(props:any){
      super(props)
      this.state ={
        visible:false,
        showLogIn:true
      }
    }

    public componentDidMount(){
      console.log(this.props)
    }

    public showModalLogIn = () => {
      this.props.changeLogInBoxShow(true)
      this.setState({
        showLogIn:true
      });
    }

    public showModalRegister = () => {
      this.props.changeLogInBoxShow(true)
      this.setState({
        showLogIn:false
      });
    }

    public handleCancel=(e:any)=>{
      this.props.changeLogInBoxShow(false)
    }

    public render() {
      return (
        <div className="LogInForm">
            <span onClick={this.showModalLogIn}>登录</span>
            <span>/</span>
            <span onClick={this.showModalRegister}>注册</span>
            <RegisterOrLogInForm visible={this.props.loginBox.show}
            handleCancel={this.handleCancel}
            showLogIn={this.state.showLogIn}
            />
        </div>

      );
    }
  }

  const mapStateToProps = (state:any,ownProps:any)=>{
    return {
      login:state.login,
      loginBox:state.loginBox
    }
  }

  const mapDispatchToProps = {changeLogInStatus,changeLogInBoxShow}


  const LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginFormWrap);

  export default LoginForm;