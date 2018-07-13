import React from 'react'
import { Menu } from 'antd';
import { Route, Link } from 'react-router-dom'
import MenuConfig from '../../config/menuConfig'
import './NavLeft.less'
const SubMenu = Menu.SubMenu;


export default class Navleft extends React.Component {
    constructor() {
        super()
        this.state = {
            theme: 'dark',
            selectable: true,
            menuTreeNode: []
        }
    }
    renderNenu(data) {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderNenu(item.children)}
                    </SubMenu>
                )
            } else {
                return <Menu.Item key={item.key}><Link to={'/admin' + item.key}>{item.title}</Link></Menu.Item>
            }
        })
    }
    componentWillMount() {
        const menuTreeNode = this.renderNenu(MenuConfig)
        this.setState({
            menuTreeNode: menuTreeNode
        })
    }
    handleClick(e) {
        console.log(e, 'target')
    }
    render() {
        return (
            <div className='menu-contianer'>
                <div className='logo'>
                    <img src={require('../../images/logo-ant.svg')} alt='' />
                    <h1>MoBike MS</h1>
                </div>
                <Menu onClick={this.handleClick.bind(this)} defaultSelectedKeys={['0']} mode="vertical" theme={this.state.theme}>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}