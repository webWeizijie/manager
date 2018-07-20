import React from 'react';
import { Route,BrowserRouter,Switch } from 'react-router-dom'
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


export default class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/admin' render={()=>
                        <Admin>
                            <Switch>
                                <Route path='/admin/ui/buttons' component={Buttons}></Route>
                                <Route path='/admin/ui/modals' component={Modals}></Route>
                                <Route path='/admin/ui/loadings' component={Loadings}></Route>
                                <Route path='/admin/ui/notification' component={Notification}></Route>
                                <Route path='/admin/ui/messages' component={Messages}></Route>
                                <Route path='/admin/ui/tabs' component={Tabs}></Route>
                                <Route path='/admin/ui/carousel' component={Carousel}></Route>
                                <Route path='/admin/ui/gallery' component={Gallery}></Route>
                                <Route path='/admin/form/login' component={LoginUI}></Route>
                                <Route path='/admin/form/reg' component={Regisiter}></Route>
                                
                                <Route component={Nomatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                    <Route path='/login' component={Login}></Route>
                </div>
            </BrowserRouter>
        )
    }
}