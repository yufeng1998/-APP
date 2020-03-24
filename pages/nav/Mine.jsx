import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../../assets/styles/mine.scss'

export default class Mine extends Component {
    state={
        mineList:[
            {list:[
                {src:'积分 (1).png',name:'我的积分'},
                {src:'订阅.png',name:'我的订阅'},
                {src:'联系人.png',name:'微聊联系人'},
            ]},
            {list:[
                {src:'计算器 (1).png',name:'房贷计算器'},
                {src:'五角星.png',name:'我的房子'},
            ]},
            {list:[
                {src:'记录.png',name:'我的看房记录'},
                {src:'我的 (2).png',name:'我的回答'},
            ]},
            {list:[
                {src:'设置 (1).png',name:'设置'},
                {src:'意见反馈.png',name:'意见反馈'},
            ]}
        ]
    }
    render() {
        return (
            <div className={'Mine'}>
                <div className={'head'}>
                    <div className={'top'}>
                        <div className={'flex'}>
                            <div>
                                <img className={'headImg'} src={require('../../assets/imgs/head.jpg')} alt=""/>
                            </div>
                            <div className={'log-reg'}>
                                <p><Link to='/log'>登录</Link>/<Link to='/reg'>注册</Link></p>
                                <p>可以与经纪人聊天</p>
                            </div>
                        </div>

                        <div>
                            <img className={'set'} src={require('../../assets/imgs/设置.png')} alt=""/>
                        </div>
                    </div>
                    <div className={'bottom'}>
                        <div className={'border'}>
                            <p>0</p>
                            <p><img src={require('../../assets/imgs/钱包.png')} alt=""/>钱包</p>
                        </div>
                        <div className={'border'}>
                            <p>0</p>
                            <p><img src={require('../../assets/imgs/优惠.png')} alt=""/>优惠</p>
                        </div>
                        <div>
                            <p>0</p>
                            <p><img src={require('../../assets/imgs/积分.png')} alt=""/>积分</p>
                        </div>
                    </div>
                </div>
                {
                    this.state.mineList.map((obj,i)=>
                    <div className={'mine'} key={i}>
                        {
                            obj.list.map((item,index)=>
                            <div className={'flex'} key={index}>
                                <div><img src={require(`../../assets/imgs/${item.src}`)} alt=""/>{item.name}</div>
                                <div>〉</div>
                            </div>
                            )
                        }
                    </div>
                    )
                }
               
            </div>
        )
    }
}
