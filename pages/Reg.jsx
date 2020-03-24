import React, { Component } from 'react'
import '../assets/styles/register.scss'
import {Flex,WhiteSpace,InputItem,Button,Radio} from 'antd-mobile'
import {register,code} from '../api/apis'

export default class Reg extends Component {
    state={
        acc:'',
        pwd:'',
        showErr:'true',
        code:'',
        curCode:''
    }
    render() {
        return (
            <div className={'reg'}>
                <div className={'form'}>
                    <WhiteSpace size="xl" />
                    <Flex justify="center">
                        <InputItem
                            clear
                            placeholder="请输入手机号"
                            onChange={(val)=>{this.setState({acc:val})}}
                        ></InputItem>
                    </Flex>
                    <WhiteSpace size="xl" />
                    <Flex justify="center">
                        <InputItem
                            clear
                            placeholder="请输入密码"
                            onChange={(val)=>{this.setState({pwd:val})}}
                        ></InputItem>
                    </Flex>
                    <WhiteSpace size="xl" />
                    <Flex justify="center">
                        <InputItem
                            clear
                            placeholder="请输入验证码"
                            className={'codeInput'}
                            onChange={(val)=>{this.setState({code:val})}}
                        ></InputItem>
                        <Button type="primary" className={'code'} onClick={this.clickCode.bind(this)}>验证码</Button>
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
                        <Button type="primary" onClick={this.clickReg.bind(this)}>注册</Button>
                    </Flex>
                    <WhiteSpace size="sm" />
                    <p style={{color:'red',display:this.state.showErr?'none':'block',textAlign:'center',marginTop:'5px'}}>请按规则输入注册信息！</p>
                    <Flex justify="center">
                        <div className={'help'}>
                            <p onClick={this.login.bind(this)}>已有账号</p>
                        </div>
                    </Flex>
                </div>
            </div>
        )
    }
    clickCode(){
        code(this.state.code).then(res=>{
            this.setState({curCode:res.data})
            alert(res.data)
        })
    }
    clickReg(){
        // if(this.state.acc!=='' && this.state.pwd!=='' && this.state.code===this.state.curCode && this.state.code!==''){
        if(this.state.acc!=='' && this.state.pwd!=='' && this.state.code!==''){
            // if(this.state.code===this.state.curCode && this.state.code!==''){

                register(this.state.acc,this.state.pwd).then(res=>{
                    if(res.data==='ok'){
                        this.props.history.push('/log');
                        this.setState({showErr:true})
                    }
                })
            // }
        }else{
            this.setState({showErr:false})
        }
        // console.log(this.state.acc,this.state.pwd)
    }
    login(){
        this.props.history.push('/log')
    }
}
