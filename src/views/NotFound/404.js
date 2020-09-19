import React from 'react';
import { Button } from "antd";

import './index.less';
function NotFound() {
  return (
    <div className="not_found">
      <div className="lost">
        <img className="img" src="https://ftp.bmp.ovh/imgs/2020/09/46f1e42aa1698eaf.png" alt="404"></img>
        <p className="text">您访问的页面走失了</p>
        <Button className="404_btn" href="#/home" shape="round">返回首页</Button>
      </div>
    </div>
  )
}

export default NotFound;