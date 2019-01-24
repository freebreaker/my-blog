import * as React from 'react';
import axios from 'axios';
import {Form, Icon, Input, Button,Modal} from 'antd';

interface RegisterFormWrapProps {
  visible:boolean,
  form?:any,
  handleCancel:(e:any)=>void,
  showLogIn:boolean,
}

class RegisterFormWrap extends React.Component<RegisterFormWrapProps, any> {
  constructor(props:any){
    super(props)
    this.state ={
      showLogIn:this.props.showLogIn,
      showRegister:!this.props.showLogIn
    }
  }

  public showLogIn=()=>{
    this.setState({
      showLogIn:true,
      showRegister:false
    })
  }

  public showRegister=()=>{
    this.setState({
      showLogIn:false,
      showRegister:true
    })
  }

  public handleSubmit = (e:any) => {
      e.preventDefault();
      this.props.form.validateFields((err:any, values:any) => {
          const postUrl = this.state.showLogIn?"/login":"/register"
          if (!err) {
            console.log('Received values of form: ', values);
            axios({
              method:"post",
              url:postUrl,
              data:values,
              withCredentials:true
            })
            .then((res)=>{
              console.log(res)
              localStorage.setItem("token",res.data.token)
            })
          }
      });
  }
  public render() {
    const { getFieldDecorator } = this.props.form;
    console.log(this.state)
    return (
      <Modal
      title={this.state.showRegister?"注 册":"登 录"}
      visible={this.props.visible}
      footer={null}
      onCancel={this.props.handleCancel}
      width={350}
    >
        <Form onSubmit={this.handleSubmit} className="login-form">
        {
          this.state.showRegister?
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
        </Form.Item>
        :""
        }

        <Form.Item>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Phone" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            {this.state.showRegister?"注册":"登录"}
          </Button>
          {
            this.state.showRegister?<span onClick={this.showLogIn}>已有账号登陆</span>
            :<span onClick={this.showRegister}>去注册</span>
          }
          
        </Form.Item>
      </Form>
      </Modal>
    );
  }
}



const RegisterOrLogInForm = Form.create({})(RegisterFormWrap)

export default RegisterOrLogInForm;