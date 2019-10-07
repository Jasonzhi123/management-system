import React, { Component } from "react";
import { Row, Col } from "antd";
import axios from '@axios';
import moment from 'moment';
import { withRouter } from 'react-router';
import './index.less';
export default class Header extends Component {
  state = {
    userName: '忆初',
  }

  componentDidMount() {
    this.timeState = setInterval(() => {
      console.log('dsaf');
      this.setState({
        sysTime: moment().format('YYYY-MM-DD HH:mm:ss')
      })
    }, 1000);
    this.getWeatherAPIData();
  }

  componentWillUnmount() {
    clearInterval(this.timeState)
  }


  render() {
    const { menuType } = this.props;
    let { sysTime, weather, userName, dayPictureUrl } = this.state
    return (
      <div className="header">
        <Row className="header-top">
          {
            menuType ?
              <Col span="6" className="logo">
                <img src={require("@assets/logo-ant.svg")} alt="" />
                <span>通用管理系统</span>
              </Col> : ''
          }
          <Col span={menuType ? 18 : 24}>
            <div>
              <span>欢迎，{userName}</span>
              <span onClick={this.signOut.bind(this)}>退出</span>
            </div>
          </Col>
        </Row>
        {
          menuType ? '' :
            <Row className="breadcrumb">
              <Col span={4} className="breadcrumb-title">
                首页
              </Col>
              <Col span={20} className="weather">
                <span className="date">{sysTime}</span>
                <span className="weather-img">
                  <img src={dayPictureUrl} alt="天气" />
                </span>
                <span className="weather-detail">{weather}</span>
              </Col>
            </Row>
        }

      </div>
    )
  }
  // 获取天气信息
  async getWeatherAPIData() {
    let city = '广州';
    let { status, results } = await axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    })
    if (status === 'success') {
      let data = results[0].weather_data[0];
      this.setState({
        dayPictureUrl: data.dayPictureUrl,
        weather: data.weather
      })
    }
  }
  // 退出
  signOut() {
    // this.props.history.push('/login')
  }
}
