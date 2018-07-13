import React from 'react'
import { Card, Button, Icon, Radio } from 'antd'
import './ui.less'

const RadioGroup = Radio.Group;
const ButtonGroup = Button.Group;
export default class Buttons extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            btnSize:'default'
        }
    }
    closeLoading = () => {
        this.setState({
            loading: false
        })
    }
    onChange = (e)=> {
        this.setState({
            btnSize:e.target.value
        })
    }
    render() {
        return (
            <div>
                <Card title="基础按钮" className='card-wrap'>
                    <Button type='primary'>Button</Button>
                    <Button type='default'>Button</Button>
                    <Button type='dashed'>Button</Button>
                    <Button type='danger'>Button</Button>
                    <Button type='ghost'>Button</Button>
                </Card>
                <Card title="图形按钮" className='card-wrap'>
                    <Button type="default" icon="plus">创建</Button>
                    <Button type='default' icon="edit">编辑</Button>
                    <Button type='default' icon="delete">删除</Button>
                    <Button shape='circle' icon="search"></Button>
                    <Button type='primary' icon="search">搜索</Button>
                    <Button type='primary' icon="download">下载</Button>
                </Card>
                <Card title="loading按钮" className='card-wrap'>
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button shape="circle" loading={this.state.loading} />
                    <Button type="defalt" loading={this.state.loading}>点击加载</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading} />
                    <Button type="primary" onClick={this.closeLoading}>关闭</Button>
                </Card>
                <Card title="按钮组" className='card-wrap group'>
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="left" />前进
                        </Button>
                        <Button type="primary">
                            返回<Icon type="right" />
                        </Button>
                    </ButtonGroup>
                </Card>
                <Card title="基础按钮" className='card-wrap'>
                    <RadioGroup onChange={this.onChange} value={this.state.btnSize}>
                        <Radio value='small'>小</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='large'>大</Radio>
                    </RadioGroup>

                    <Button type='primary' size={this.state.btnSize}>Button</Button>
                    <Button type='default' size={this.state.btnSize}>Button</Button>
                    <Button type='dashed' size={this.state.btnSize}>Button</Button>
                    <Button type='danger' size={this.state.btnSize}>Button</Button>
                    <Button type='ghost' size={this.state.btnSize}>Button</Button>
                </Card>
            </div>
        )
    }
}