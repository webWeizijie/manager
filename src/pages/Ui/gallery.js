import React from 'react'
import {
    Card,
    Row,
    Col
} from 'antd'

const imgs = [
    ['1.png', '2.png', '3.png', '4.png', '5.png'],
    ['6.png', '7.png', '8.png', '9.png', '10.png'],
    ['11.png', '12.png', '13.png', '14.png', '15.png'],
    ['16.png', '17.png', '18.png', '19.png', '20.png'],
    ['21.png', '22.png', '23.png', '24.png', '25.png']
]
export default class Gallery extends React.Component {
    render() {
        const imgsList = imgs.map((item) => item.map((img) => {
            return <Card cover={<img src={"/gallery/" + img} alt='' />}>
                <Card.Meta title='React Admin' description='admin.51purse.com' />
            </Card>
        }))
        return (
            <div className='card-warp'>
                <Row>
                    {
                        imgsList.map((ele,idx) => {
                            let md = 0
                            if(idx == imgsList.length - 1){
                                md = 4
                            }else{
                                md = 5
                            }
                            return <Col md={md}>
                                {ele}
                            </Col>

                        })
                    }
                </Row>
            </div>

        )
    }
}