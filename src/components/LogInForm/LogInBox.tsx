import * as React from 'react';
import {Form} from 'antd';
import './LoginBox.css';
import RegisterOrLogInForm from './RegisterOrLogInForm';


class LoginFormWrap extends React.Component<any,any> {

    constructor(props:any){
      super(props)
      this.state ={
        visible:false,
        showLogIn:true
      }
    }

    public showModalLogIn = () => {
      this.setState({
        visible: true,
        showLogIn:true
      });
    }

    public showModalRegister = () => {
      console.log(3)
      this.setState({
        visible: true,
        showLogIn:false
      });
    }

    public handleCancel=(e:any)=>{
      this.setState({
        visible: false
      });
    }

    public render() {
      return (
        <div className="LogInForm">
            <span onClick={this.showModalLogIn}>登录</span>
            <span>/</span>
            <span onClick={this.showModalRegister}>注册</span>
            <RegisterOrLogInForm visible={this.state.visible}
            handleCancel={this.handleCancel}
            showLogIn={this.state.showLogIn}
            />
        </div>

      );
    }
  }

  const LoginForm = Form.create({})(LoginFormWrap)

  export default LoginForm;