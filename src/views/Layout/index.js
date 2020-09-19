import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Layout, Menu, Breadcrumb, Dropdown, Avatar, Button } from 'antd';
import {
  HomeOutlined,
  DownOutlined,
  UserOutlined,
  SettingOutlined,
  CodepenCircleOutlined
} from '@ant-design/icons';

import './index.less';


const mapMenu = [
  { key: 'home', name: '首页' },
  { key: 'user-list', name: '用户列表', parentKey: 'user-menu', parentName: '用户管理' },
  { key: 'basic-info', name: '基本资料', parentKey: 'setting-menu', parentName: '设置管理' },
  { key: 'modify-password', name: '修改密码', parentKey: 'setting-menu', parentName: '设置管理' }
]
class LayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.onCollapse = this.onCollapse.bind(this);
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
    console.log(userInfo);
    this.state = {
      collapsed: false,
      title: 'React-Antd-Admin',
      breadCrumb: ['首页'],
      userInfo
    }
  }
  onCollapse() {
    this.setState({ collapsed: !this.state.collapsed });
  };
  handleMenuClick = (item) => {
    const { key } = item;
    if (key === 'logout') {
      localStorage.clear();
      this.props.history.push('/login');
    } else {
      this.props.history.push(item.key);
    }
  }
  handleRouter = (item) => {
    const findMenu = mapMenu.find(subMenu => subMenu.key === item.key);
    let breadCrumb = [];

    breadCrumb.push(findMenu.parentName, findMenu.name);
    // 过滤掉undefined
    breadCrumb = breadCrumb.filter(item => item);
    // 刷新state
    this.setState({
      breadCrumb
    }, () => {
      this.props.history.push(item.key);
    });
  }
  render() {
    const { Header, Content, Sider, Footer } = Layout;
    const { title, breadCrumb, userInfo } = this.state;
    const { route } = this.props;
    const userDropdownMenu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="basic-info">基本资料</Menu.Item>
        <Menu.Item key="modify-password">修改密码</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">退出</Menu.Item>
      </Menu>
    )
    return (
      <HashRouter>
        <Layout style={{ height: '100vh' }}>
          {/* 通栏头部 */}
          <Header className="header">
            {/* logo */}
            <div className="logo" style={{ color: 'white', fontSize: '23px', textAlign: 'left' }}>
              <CodepenCircleOutlined className="logo_icon" />{title}
            </div>
            {/* 用户信息 */}
            <div className="header_right">
              <div className="user_info">
                <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></Avatar>
                <Dropdown
                  overlay={userDropdownMenu}
                  trigger="['click']"
                >
                  <Button className="userinfo_btn" type="link">
                    {userInfo.username}<DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
          </Header>
          <Layout>
            {/* 侧边栏 */}
            <Sider width={200} className="site-layout-background" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <Menu
                mode="inline"
                theme="dark"
                onClick={this.handleRouter}
              >
                <Menu.Item key="home" icon={<HomeOutlined />}>
                  首页
                                </Menu.Item>
                <Menu.SubMenu key="user-menu" icon={<UserOutlined />} title="用户管理">
                  <Menu.Item key="user-list">用户列表</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="setting-menu" icon={<SettingOutlined />} title="设置管理">
                  <Menu.ItemGroup key="user-setting" title="我的设置">
                    <Menu.Item key="basic-info">基本资料</Menu.Item>
                    <Menu.Item key="modify-password">修改密码</Menu.Item>
                  </Menu.ItemGroup>
                </Menu.SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              {/* 面包屑 */}
              <Breadcrumb style={{ margin: '16px 0' }}>
                {breadCrumb.map((item, index) => <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>)}
              </Breadcrumb>
              {/* 内容 */}
              <Content
                className="site-layout-background"
                style={{
                  padding: 0,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {renderRoutes(route.routes)}
              </Content>
              {/* 底部 */}
              <Footer style={{ textAlign: 'center' }}>系统由 React+Node+Ant Desgin驱动</Footer>
            </Layout>
          </Layout>
        </Layout>
      </HashRouter>
    );
  }
}

export default LayoutContainer;