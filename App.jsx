import React, { Component } from 'react'
import {HashRouter,Switch,Route} from 'react-router-dom'
import Log from './pages/Log.jsx'
import Nav from './pages/Nav.jsx'
import Reg from './pages/Reg.jsx'
import Error from './pages/Error.jsx'
import Position from './pages/nav/Position.jsx'
import Citylist from './pages/nav/Citylist'

// import Main from './pages/nav/Main.jsx'
// import Chat from './pages/nav/Chat.jsx'
// import History from './pages/nav/History.jsx'
// import Mine from './pages/nav/Mine.jsx'

export default class App extends Component {
    render() {
        return <HashRouter>
            <Switch>
                <Route path='/' exact component={Nav}></Route>
                <Route path='/log' component={Log}></Route>
                <Route path='/reg' component={Reg}></Route>
                <Route path='/position' component={Position}></Route>
                <Route path='/citylist' component={Citylist}></Route>
                   
                <Route component={Error}></Route>
            </Switch>
        </HashRouter>
    }
}
