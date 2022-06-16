import React, { Component } from 'react'
import { Button,message } from 'antd'
import 'antd/dist/antd.less'

export default class App extends Component {
  handleClick = () => {
    message.success('成功啦...');
  } 
  render () {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>测试按钮</Button>
      </div>
    )
  }
}
