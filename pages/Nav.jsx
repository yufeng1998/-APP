import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Flex} from 'antd-mobile'
import '../assets/styles/nav.scss'
// import Main from './nav/Main.jsx'
// import Chat from './nav/Chat.jsx'
// import History from './nav/History.jsx'
// import Mine from './nav/Mine.jsx'

// export default class Nav extends Component {
//     render() {
//         return <HashRouter>
//             <Switch>
//                 <Route path='/nav/main' exact component={Main}></Route>
//                 <Route path='/nav/chat' component={Chat}></Route>
//                 <Route path='/nav/history' component={History}></Route>
//                 <Route path='/nav/mine' component={Mine}></Route>
//             </Switch>
//         </HashRouter>
        
//     }
// }
// import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div>

                <div>
                    <Link to='/nav/log'>登录</Link>
                    <Link to='/nav/main'>首页</Link>
                </div>
                <div className={'nav'}>
                    <Flex>
                        <Flex.Item>
                            <Link to='/nav/main' className={'jump'}><div><img src={require('../assets/imgs/首页.png')} alt=''/></div><span>首页</span></Link>
                        </Flex.Item>
                        <Flex.Item>
                            <Link to='/nav/chat' className={'jump'}><div><img src={require('../assets/imgs/聊天.png')} alt=''/></div><span>微聊</span></Link>
                        </Flex.Item>
                        <Flex.Item>
                            <Link to='/nav/history' className={'jump'}><div><img src={require('../assets/imgs/足迹.png')} alt=''/></div><span>足迹</span></Link>
                        </Flex.Item>
                        <Flex.Item>
                            <Link to='/nav/mine' className={'jump'}><div><img src={require('../assets/imgs/我的.png')} alt=''/></div><span>我的</span></Link>
                        </Flex.Item>
                    </Flex>
                </div>
                {/* <div>
                    <Route path='/main' component={Main}></Route>
                    <Route path='/nav/chat' component={Chat}></Route>
                    <Route path='/nav/history' component={History}></Route>
                    <Route path='/nav/mine' component={Mine}></Route>
                </div> */}
            </div>
        )
    }
}
