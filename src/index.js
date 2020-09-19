import React from 'react';
import ReactDOM from 'react-dom';
// 使用hash路由
import { HashRouter } from 'react-router-dom';
// 集中式路由管理
import { renderRoutes } from 'react-router-config';
// 为组件提供统一的全局化配置
import { ConfigProvider } from 'antd';
// 路由
import routes from '@/routes/index';

function APP() {
  return (
    <ConfigProvider>
      <HashRouter>
        {renderRoutes(routes)}
      </HashRouter>
    </ConfigProvider>
  )
}

ReactDOM.render(
  <APP />,
  document.getElementById('root')
);
