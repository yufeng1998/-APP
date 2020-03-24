import React, { Component } from 'react'
import {Button,WhiteSpace} from 'antd-mobile'
import '../../assets/styles/chat.scss'

export default class Chat extends Component {
    render() {
        return (
            <div className={'Chat'}>
                <div className={'center'}>
                    <div className={'headImg'}><img src={require('../../assets/imgs/4.jpg')} alt=""/></div>
                    <p>置业顾问：<span>张小妹</span></p>
                    <p>专业服务诚信做人诚信做事！</p>
                    <Button type="primary">我要聊天</Button><WhiteSpace />
                </div>
            </div>
        )
    }
}
