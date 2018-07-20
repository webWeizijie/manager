import React from 'react'
import { Card, Button, message } from 'antd'

export default class Messages extends React.Component {
    success = () => {
        message.success('This is a message of success');
    };

    error = () => {
        message.error('This is a message of error');
    };

    warning = () => {
        message.warning('This is message of warning');
    };
    info = () => {
        message.info('This is a normal message');
    };
    loading = () => {
        message.loading('Action in progress..', 2.5)
            .then(() => message.success('Loading finished', 2.5))
            .then(() => message.info('Loading finished is finished', 2.5));
    };
    render() {
        return (
            <Card title='全局提示框' className='card-wrap'>
                <Button type='primary' onClick={this.success}>success</Button>
                <Button type='primary' onClick={this.info}>info</Button>
                <Button type='primary' onClick={this.warning}>warning</Button>
                <Button type='primary' onClick={this.error}>error</Button>
                <Button type='primary' onClick={this.loading}>loading</Button>
            </Card>
        )
    }
}