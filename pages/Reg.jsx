import React, { Component } from 'react'
import '../assets/styles/register.scss'
import {Flex,WhiteSpace,InputItem,Button,Radio} from 'antd-mobile'

export default class Reg extends Component {
    render() {
        return (
            <div className={'reg'}>
                <div className={'form'}>
                    <WhiteSpace size="xl" />
                    <Flex justify="center">
                        <InputItem
                            clear
                            placeholder="请输入手机号"
                        ></InputItem>
                    </Flex>
                    <WhiteSpace size="xl" />
                    <Flex justify="center">
                        <InputItem
                            clear
                            placeholder="请输入密码"
                        ></InputItem>
                    </Flex>
                    <WhiteSpace size="xl" />
                    <Flex justify="center">
                        <InputItem
                            clear
                            placeholder="请输入验证码"
                            className={'codeInput'}
                        ></InputItem>
                        <Button type="primary" className={'code'}>验证码</Button>
                    </Flex>
                    <WhiteSpace/>
                    <Flex justify="center">   
                        <p className={'agree'}>
                            <Radio className="my-radio">我已同意<span className={'aggreement'}>《用户服务协议》及《隐私权政策》</span>
                            </Radio>
                        </p>
                    </Flex>
                    <WhiteSpace/>
                    <Flex justify="center">
                        <Button type="primary">注册</Button>
                    </Flex>
                    <WhiteSpace size="sm" />
                    <Flex justify="center">
                        <div className={'help'}>
                            <p>已有账号</p>
                        </div>
                    </Flex>
                </div>
            </div>
        )
    }
}
