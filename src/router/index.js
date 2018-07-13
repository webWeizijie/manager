import React from 'react';
import { Route,BrowserRouter,Switch } from 'react-router-dom'
import Admin from '../admin'
import Login from '../components/Login'
import Buttons from '../pages/Ui/buttons.js'
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