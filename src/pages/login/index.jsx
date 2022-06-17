import React, { Component } from 'react'
import './login.less'
import logo from './images/logo.png'
import { Button, Checkbox, Form, Input } from 'antd'

export default class Login extends Component {
  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
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
              <Form.Item label='Username' name='username' rules={[{required: true,message: 'Please input your username!'}]}>
                <Input />
              </Form.Item>
              <Form.Item label='Password' name='password' rules={[{required: true,message: 'Please input your password!'}]}>
                <Input.Password />
              </Form.Item>
              <Form.Item name='remember' valuePropName='checked' wrapperCol={{offset: 8,span: 16}}>
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
