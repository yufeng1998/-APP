import React, { Component } from 'react'
import '../assets/styles/login.scss'
import {Flex,WhiteSpace,InputItem,Button} from 'antd-mobile'
import {Link} from 'react-router-dom'
import {login} from '../api/apis' 

export default class Log extends Component {
    state={
        acc:'',
        pwd:'',
        showErr:'true'
    }
    render() {
        return (
            <div className={'Log'}>
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
                            onChange={(val)=>{this.setState({acc:val})}}
                        ><img src={require('../assets/imgs/用户.png')} alt=""/></InputItem>
                    </Flex>
                    <WhiteSpace size="xl" />
                    <Flex justify="center">
                        <InputItem
                            clear
                            placeholder="请输入密码"
                            onChange={(val)=>{this.setState({pwd:val})}}
                        ><img src={require('../assets/imgs/密码.png')} alt=""/></InputItem>
                    </Flex>
                    <WhiteSpace size="xl" />
                    <Flex justify="center">
                        <Button type="primary" onClick={this.clickLogin.bind(this)}>登录</Button>
                    </Flex>
                    <p style={{color:'red',display:this.state.showErr?'none':'block',textAlign:'center',marginTop:'5px'}}>账号或密码有误，请重新输入！</p>
                    <WhiteSpace size="xl" />
                    <Flex justify="center">
                        <div className={'help'}>
                            <p><Link to="/reg">手机快速注册</Link></p>
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
    clickLogin(){
        login(this.state.acc,this.state.pwd ).then((res)=>{
            if(res.data==='ok' && this.state.acc!=='' && this.state.pwd!==''){
                this.props.history.push('/')
            }else{
                this.setState({showErr:false})
            }                  
        })
    }
}
