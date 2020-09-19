import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { message, } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import './index.less'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      overlay: {
        isLogin: true,
        step: 100
      },
      registerForm: {
        email: '',
        username: '',
        password: ''
      },
      loginForm: {
        username: '',
        password: ''
      }
    }
  }
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
      }
    })
  }
  handleInputChange = () => { }
  handleRegister = () => { }
  toggleOverlay = () => { }
  render() {
    const { loading, overlay, loginForm, registerForm } = this.state;
    return (
      <div className="login_register">
        <div className="container">
          <div className="login">
            <form id="login" onSubmit={this.handleLogin}>
              <h1 style={{ color: '#000', fontWeight: '700' }}>登录</h1>
              <input
                type="text"
                name="username"
                value={loginForm.username}
                onChange={(event) => this.handleInputChange(event, 'login', 'username')}
                placeholder="用户名"
              ></input>
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={(event) => this.handleInputChange(event, 'login', 'password')}
                placeholder="密码"
              ></input>
              <Link to="/forget" style={{ margin: '5px 0', color: '#333' }}>忘记密码</Link>
              <button
                type="submit"
                className="login_btn"
                disabled={loading ? true : false}
              >{loading ? <LoadingOutlined style={{ marginRight: '5px' }} /> : null}登录</button>
            </form>
          </div>
          <div className="register">
            <form id="register" onSubmit={this.handleRegister}>
              <h1 style={{ color: '#000', fontWeight: '700' }}>注册</h1>
              <input
                type="email"
                name="email"
                value={registerForm.email}
                onChange={(event) => this.handleInputChange(event, 'register', 'email')}
                placeholder="邮箱"
              ></input>
              <input
                type="text"
                name="username"
                value={registerForm.username}
                onChange={(event) => this.handleInputChange(event, 'register', 'username')}
                placeholder="用户名"
              ></input>
              <input type="password" name="password" value={registerForm.password} onChange={(event) => this.handleInputChange(event, 'register', 'password')} placeholder="密码" ></input>
              <button type="submit" className="register_btn">注册</button>
            </form>
          </div>
          <div className="overlay" style={{ transform: 'translateX(' + overlay.step + '%)', transition: 'ease all 0.5s' }}>
            {
              overlay.isLogin ?
                <section className="overlay_box_right">
                  <h1>注册新账号！</h1>
                  <p>输入您的个人信息注册账号。</p>
                  <button className="login_btns" onClick={this.toggleOverlay.bind(this, 0)}>注册</button>
                </section>
                :
                <section className="overlay_box_left">
                  <h1>欢迎回来！</h1>
                  <p>请您先登录的个人信息，进行操作。</p>
                  <button className="login_btns" onClick={this.toggleOverlay.bind(this, 100)}>登录</button>
                </section>
            }
          </div>
        </div>
      </div>
    )
  }
}
export default Login;
