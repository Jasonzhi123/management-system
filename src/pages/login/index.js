import React, { Component } from 'react'
import './index.less'
import bg from "@assets/carousel-img/carousel-1.jpg"
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd";
const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className='login-page' style={{ backgroundImage: `url(${bg})` }}>
        <div className="login-box">
          <Card title="登录" >
            <Form style={{ width: 300 }}>
              <FormItem>
                {
                  getFieldDecorator('userName', {
                    initialValue: '',
                    rules: [
                      {
                        required: true,
                        message: '用户名不能为空'
                      },
                      {
                        min: 5, max: 10,
                        message: '长度不在范围内'
                      },
                      {
                        pattern: new RegExp('^\\w+$', 'g'),
                        message: '用户名必须为字母或者数字'
                      }
                    ]
                  })(
                    <Input prefix={<Icon type="user" />} placeholder="请输入用户名" />
                  )
                }
              </FormItem>
              <FormItem>
                {
                  getFieldDecorator('userPwd', {
                    initialValue: '',
                    rules: []
                  })(
                    <Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码" />
                  )
                }
              </FormItem>
              <FormItem>
                {
                  getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true
                  })(
                    <Checkbox>记住密码</Checkbox>
                  )
                }
                <button href="#" style={{ float: 'right' }}>忘记密码</button>
              </FormItem>
              <FormItem>
                <Button type="primary" onClick={this.handleSubmit}>登录</Button>
              </FormItem>
            </Form>
          </Card>
        </div>
      </div>
    )
  }
}
export default Form.create()(Login);
