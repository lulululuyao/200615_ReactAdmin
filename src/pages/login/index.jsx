import React, { Component } from 'react'
import './login.less'
import logo from './images/logo.png'
<<<<<<< HEAD
import { LockOutlined, UserOutlined } from '@ant-design/icons';
=======
>>>>>>> 22eb8b38e67a9333d98e729feeca5871a33d3b38
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
              <Form.Item name='username' rules={[{required: true,message: 'Please input your username!'}]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25'}}/>} placeholder="Username" />
              </Form.Item>
              <Form.Item name='password' rules={[{required: true,message: 'Please input your password!'}]}>
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
