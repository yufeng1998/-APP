import React, { Component } from 'react'
import '../assets/styles/login.scss'
import {Flex,WhiteSpace,InputItem,Button} from 'antd-mobile'

export default class Log extends Component {
    render() {
        return (
            <div>
                <WhiteSpace size="xl" />
                <div className={'logo'}>
                    <Flex justify="center">   
                        <img src={require('../assets/imgs/YU.png')} alt=""/>
                    </Flex>
                </div>
                <WhiteSpace size="xl" />
                <div className={'form'}>
                    <Flex justify="center">
                        <InputItem
                            clear
                            placeholder="请输入手机号"
                        ><img src={require('../assets/imgs/用户.png')} alt=""/></InputItem>
                    </Flex>
                    <WhiteSpace size="xl" />
                    <Flex justify="center">
                        <InputItem
                            clear
                            placeholder="请输入密码"
                        ><img src={require('../assets/imgs/密码.png')} alt=""/></InputItem>
                    </Flex>
                    <WhiteSpace size="xl" />
                    <Flex justify="center">
                        <Button type="primary">登录</Button>
                    </Flex>
                    <WhiteSpace size="xl" />
                    <Flex justify="center">
                        <div className={'help'}>
                            <p>手机快速注册</p>
                            <p>忘记密码?</p>
                        </div>
                    </Flex>
                </div>
                <div className={'agreement'}>
                    <Flex justify="center">
                        <p>登录/注册即代表同意《小鱼房产用户协议》</p>
                    </Flex>
                </div>
            </div>
        )
    }
}
