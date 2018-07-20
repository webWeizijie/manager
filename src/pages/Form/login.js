import React from 'react'
import { Card, Input, Form, Button, Icon, Checkbox } from 'antd'

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <Card title="登录行内表单" className='card-wrap'>
                    <Form layout="inline">
                        <Form.Item >
                            <Input placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="请输入密码" />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                登录
                        </Button>
                        </Form.Item>
                    </Form>

                </Card>
                <Card title="登录水平表单" className='card-wrap'>
                    <Form style={{ maxWidth: '300px' }}>
                        <Form.Item >
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>记住密码</Checkbox>
                            <a className="login-form-forgot" href="" style={{float:'right'}}>忘记密码</a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                                登录
                        </Button>
                        </Form.Item>

                    </Form>

                </Card>
            </div>
        )
    }
}