import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import utils from '../../utils/utils'
import Axios from '../../axios'
import './header.less'

class Header extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentWillMount() {
        this.getWeatherInfo()

        setInterval(() => {
            const timer = utils.formateDate(new Date())
            this.setState({
                timer
            })
        }, 1000)

        this.setState({
            userName: '管理员'
        })

    }
    getWeatherInfo() {
        let city = '北京'
        Axios.jsonp({
            url: `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        }).then((res) => {
            const weather = res.results[0].weather_data[0].weather
            const weatherImg = res.results[0].weather_data[0].dayPictureUrl
            this.setState({
                weather,
                weatherImg
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    
    render() {
        const {menuType,menuName } = this.props
        return (
            <div className="header">
                <Row className="header-top">
                    {
                        menuType?
                            <Col span="6" className="logo">
                                <img src="/assets/logo-ant.svg" alt=""/>
                                <span>IMooc 通用管理系统</span>
                            </Col>:''
                    }
                    <Col span={menuType?18:24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                {
                    menuType?'':
                        <Row className="breadcrumb">
                            <Col span="4" className="breadcrumb-title">
                                {menuName || '首页'}
                            </Col>
                            <Col span="20" className="weather">
                                <span className="date">{this.state.sysTime}</span>
                                <span className="weather-img">
                                    <img src={this.state.dayPictureUrl} alt="" />
                                </span>
                                <span className="weather-detail">
                                    {this.state.weather}
                                </span>
                            </Col>
                        </Row>
                }
            </div>
        );
    }
}

Header = connect(state => {
    return {
        navTitle: state.navTitle
    }
}, {})(Header)
export default Header