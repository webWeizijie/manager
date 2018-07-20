import React from 'react'
import { Card, Button, notification } from 'antd'
export default class Notification extends React.Component {
    openNotificationWithIcon = (type) => {
        notification[type]({
            message: '发工资了',
            description: '上月考勤22天， 迟到12天，实发工资250，请笑纳',
        });
    };
    changeNotification = (config,type) => {
        notification.config({
            placement: config,
        })
        notification[type]({
            message: '发工资了',
            description: '上月考勤22天， 迟到12天，实发工资250，请笑纳',
        });
    }
    render() {
        return (
            <div>
                <Card title='通知提醒框' className='card-wrap'>
                    <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
                    <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
                    <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
                    <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
                </Card>

                <Card title='通知提醒框-方向控制' className='card-wrap'>
                    <Button onClick={() => this.changeNotification('topLeft','success')}>topLeft</Button>
                    <Button onClick={() => this.changeNotification('topRight','info')}>topRight</Button>
                    <Button onClick={() => this.changeNotification('bottomLeft','warning')}>bottomLeft</Button>
                    <Button onClick={() => this.changeNotification('bottomRight','error')}>bottomRight</Button>
                </Card>
            </div>
        )
    }
}