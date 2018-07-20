import React from 'react'
import { Carousel, Card } from 'antd'
import './ui.less'
function onChange(a, b, c) {
    console.log(a, b, c);
}

export default class Carousels extends React.Component {
    render() {
        return (
            <div>
                <Card title='文字背景轮播' className='card-wrap'>
                    <Carousel afterChange={onChange}>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                    </Carousel>
                </Card>
                <Card title='图片轮播' className='card-wrap slider-wrap'>
                    <Carousel afterChange={onChange} autoplay effect="fade">
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg" alt="" />
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}