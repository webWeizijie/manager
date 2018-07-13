import React from 'react'
import { Row, Col } from 'antd'
import utils from '../../utils/utils'
import Axios from '../../axios'
import './header.less'

export default class Header extends React.Component {
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
    getWeatherInfo(){
        let city ='北京'
        Axios.jsonp({
            url:`http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        }).then((res)=>{
            const weather = res.results[0].weather_data[0].weather
            const weatherImg = res.results[0].weather_data[0].dayPictureUrl
            this.setState({
                weather,
                weatherImg
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span={24}>
                        <span>欢迎，　{this.state.userName}</span>
                        <a href='#'>退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col span={4} className='breadcrumb-title'>
                        首页
                    </Col>
                    <Col className='weather'>
                        <span className='date'>{this.state.timer}</span>
                        <span className='weather-symbol'>
                            <img src={this.state.weatherImg} alt='' />
                        </span>
                        <span className='weather-info'>{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}