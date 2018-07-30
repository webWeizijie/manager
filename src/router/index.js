import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom'
import Admin from '../admin'
import Login from '../components/Login'
import Buttons from '../pages/Ui/buttons.js'
import Modals from '../pages/Ui/modals.js'
import Loadings from '../pages/Ui/loadings'
import Notification from '../pages/Ui/notification'
import Messages from '../pages/Ui/messages'
import Tabs from '../pages/Ui/tabs'
import Carousel from '../pages/Ui/carousel'
import Gallery from '../pages/Ui/gallery'
import LoginUI from '../pages/Form/login'
import Regisiter from '../pages/Form/Regisiter'
import Nomatch from '../pages/nomatch'
import BasicTable from '../pages/table/basicTable'
import HighTable from '../pages/table/highTable'
import RichText from '../pages/rich/index'
import City from '../pages/city/index'
import Order from '../pages/Order/index'
import User from '../pages/User/index'
import OrderDetail from '../pages/Order/detail'
import Common from '../common.js'
import Home from '../pages/Home/index'

export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/common" render={() =>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                            </Common>
                        }
                        />
                        <Route path='/' render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/ui/buttons' component={Buttons}></Route>
                                    <Route path='/ui/modals' component={Modals}></Route>
                                    <Route path='/ui/loadings' component={Loadings}></Route>
                                    <Route path='/ui/notification' component={Notification}></Route>
                                    <Route path='/ui/messages' component={Messages}></Route>
                                    <Route path='/ui/tabs' component={Tabs}></Route>
                                    <Route path='/ui/carousel' component={Carousel}></Route>
                                    <Route path='/ui/gallery' component={Gallery}></Route>
                                    <Route path='/form/login' component={LoginUI}></Route>
                                    <Route path='/form/reg' component={Regisiter}></Route>
                                    <Route path='/table/basic' component={BasicTable} />
                                    <Route path='/table/high' component={HighTable} />
                                    <Route path='/rich' component={RichText} />
                                    <Route path='/city' component={City} />
                                    <Route path='/order' component={Order} />
                                    <Route path='/user' component={User}></Route>
                                    <Route path='/home' component={Home}></Route>
                                    <Route component={Nomatch}></Route>
                                </Switch>
                            </Admin>
                        }></Route>
                        <Route path='/login' component={Login}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}