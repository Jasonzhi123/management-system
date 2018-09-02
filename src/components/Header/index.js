import React, { Component } from "react";
import { Row, Col } from "antd";
import './index.less';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col >
            <span>欢迎，aa</span>
            <a href="#">退出</a>
          </Col>
        </Row>
      </div>
    )
  }
}
