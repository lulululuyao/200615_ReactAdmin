import React, { Component } from 'react'
import './login.less'
import logo from './images/logo.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd'

export default class Login extends Component {
  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  validatorPwd = (_, value)=>{
    if (!value ) {
      return Promise.reject(new Error('密码必须输入！'));
    }else if(value.length < 4){
      return Promise.reject(new Error('密码长度不能小于4位！'));
    }
    else if(value.length > 12){
      return Promise.reject(new Error('密码长度不能大于12位！'));
    }else if(/^[a-zA-Z0-9_]+$/.test(value)){
      return Promise.reject(new Error('密码必须是英文、数字或下划线组成'));
    }else{
      return Promise.resolve();
    }
  }
  render () {
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt='logo' />
          <h1>React项目：后台管理系统</h1>
        </header>
        <section className='login-content'>
          <h2>用户登录</h2>
          <div>
            <Form className='login-form' name='basic' initialValues={{ remember: true }}
              onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} autoComplete='off'>
              <Form.Item name='username'
                // 声明式验证：直接使用定义好的的验证规则进行验证 
                rules={[
                  { required: true, whitespace: true, message: '用户名必须输入' },
                  { min: 4, message: '用户名至少4位' },
                  { max: 12, message: '用户名最多12位' },
                  { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
               ]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25'}}/>} placeholder="Username" />
              </Form.Item>
              <Form.Item name='password' 
                rules={[
                  {validator:this.validatorPwd}
               ]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25'}}/>} type="password" placeholder="Password"/>
              </Form.Item>
              <Form.Item name='remember' valuePropName='checked' >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Form.Item >
                <Button className='login-form-btn' type='primary' htmlType='submit'>提交</Button>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
    )
  }
}
