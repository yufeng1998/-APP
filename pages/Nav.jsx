import React, { Component } from 'react'
// import {Route,Link} from 'react-router-dom'
import {TabBar} from 'antd-mobile'
import '../assets/styles/nav.scss'
import Main from './nav/Main.jsx'
import Chat from './nav/Chat.jsx'
import History from './nav/History.jsx'
import Mine from './nav/Mine.jsx'

export default class Nav extends Component {
    // render() {
    //     return (
    //         <div>
    //             <div>
    //                 <Route path='/nav/main' component={Main}></Route>
    //                 <Route path='/nav/chat' component={Chat}></Route>
    //                 <Route path='/nav/history' component={History}></Route>
    //                 <Route path='/nav/mine' component={Mine}></Route>
    //             </div>
    //             {/* <div>
    //                 <Link to='/log'>登录</Link>
    //                 <Link to='/nav/main'>首页</Link>
    //             </div> */}
    //             <div className={'nav'}>
    //                 <Flex>
    //                     <Flex.Item>
    //                         <Link to='/nav/main' className={'jump'}><div><img src={require('../assets/imgs/首页.png')} alt=''/></div><span>首页</span></Link>
    //                     </Flex.Item>
    //                     <Flex.Item>
    //                         <Link to='/nav/chat' className={'jump'}><div><img src={require('../assets/imgs/聊天.png')} alt=''/></div><span>微聊</span></Link>
    //                     </Flex.Item>
    //                     <Flex.Item>
    //                         <Link to='/nav/history' className={'jump'}><div><img src={require('../assets/imgs/足迹.png')} alt=''/></div><span>足迹</span></Link>
    //                     </Flex.Item>
    //                     <Flex.Item>
    //                         <Link to='/nav/mine' className={'jump'}><div><img src={require('../assets/imgs/我的.png')} alt=''/></div><span>我的</span></Link>
    //                     </Flex.Item>
    //                 </Flex>
    //             </div>
                
    //         </div>
    //     )
    // }
    state = {
        selectedTab: 'blueTab',
        navList:[
            {title:'首页',key:'Main',icon:'首页',sIcon:'首页 (1)',selectedTab:'blueTab',page:<Main/>},
            {title:'微聊',key:'Chat',icon:'聊天',sIcon:'聊天 (1)',selectedTab:'redTab',page:<Chat/>},
            {title:'足迹',key:'History',icon:'足迹',sIcon:'足迹 (1)',selectedTab:'greenTab',page:<History/>},
            {title:'我的',key:'Mine',icon:'我的',sIcon:'我的 (3)',selectedTab:'yellowTab',page:<Mine/>},
        ]
    }
    
    
      render() {
        return (
          <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
            <TabBar>
                {
                    this.state.navList.map(obj=>
                    <TabBar.Item
                        title={obj.title}
                        key={obj.key}
                        icon={{ uri: require('../assets/imgs/'+obj.icon+'.png') }}
                        selectedIcon={{ uri: require('../assets/imgs/'+obj.sIcon+'.png') }}
                        selected={this.state.selectedTab === obj.selectedTab}
                        onPress={() => {
                        this.setState({
                            selectedTab: obj.selectedTab,
                        });
                        }}
                        data-seed="logId"
                    >
                        {obj.page}
                    </TabBar.Item>
                    )
                }
            </TabBar>
          </div>
        );
      }
}
