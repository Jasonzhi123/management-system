import React, { Component } from 'react'
import {Card, Button, Form, Input, Select, Tree, Transfer, Modal} from 'antd';

export default class index extends Component {
  render() {
    return (
      <div>
        <Card>
          <Button type="primary" onClick={this.handleRole}>创建角色</Button>
          <Button type="primary" onClick={this.handlePermission}>设置权限</Button>
          <Button type="primary" onClick={this.handleUserAuth}>用户授权</Button>
        </Card>
      </div>
    )
  }
}
