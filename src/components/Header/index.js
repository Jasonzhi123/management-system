import React, { Component } from "react";
import { Row, Col } from "antd";
import utils from '../../utils/utils';
import axios from '../../axios';

import './index.less';


export default class Header extends Component {
  state = {}

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    this.setState({
      userName: '忆初',
    })
    setInterval(() => {
      let sysTime = utils.timestampToTime(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000);
    this.getWeatherAPIData();
  }
  render() {
    const { menuName, menuType } = this.props;
    return (
      <div className="header">
        <Row className="header-top">
        {
            menuType ?
              <Col span="6" className="logo">
                <img src="/assets/logo-ant.svg" alt="" />
                <span>IMooc 通用管理系统</span>
              </Col>:''
        }
          <Col span={menuType ? 18 : 24}>
            <span>欢迎，{this.state.userName}</span>
            <a >退出</a>
          </Col>
        </Row>
        {
          menuType ? '' :
            <Row className="breadcrumb">
              <Col span="4" className="breadcrumb-title">
                首页
              </Col>
              <Col span="20" className="weather">
                <span className="date">{this.state.sysTime}</span>
                <span className="weather-img">
                  <img src={this.state.dayPictureUrl} alt="天气" />
                </span>
                <span className="weather-detail">{this.state.weather}</span>
              </Col>
            </Row>
        }

      </div>
    )
  }

  getWeatherAPIData() {
    let city = '广州';
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res) => {
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        })
      }
    })
  }
}
