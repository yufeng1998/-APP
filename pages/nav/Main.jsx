import React, { Component } from 'react'
import {Flex,InputItem,Icon,Carousel, WingBlank} from 'antd-mobile'
import {Link} from 'react-router-dom'
import '../../assets/styles/main.scss'
import {getHouse,IP} from '../../api/apis'
import {connect} from 'react-redux'


class Main extends Component {
    state = {
        data: ['1', '2', '3','4','5'],
        imgHeight: 176,
        navList:[
            {id:'1',nav:[

                {id:'1',src:'3_03',name:'新房'},
                {id:'2',src:'3_10',name:'二手房'},
                {id:'3',src:'3_05',name:'租房'},
                {id:'4',src:'3_07',name:'写字楼'},
            ]},
            {id:'2',nav:[
                {id:'1',src:'3_16',name:'卖房'},
                {id:'2',src:'3_17',name:'海外房产'},
                {id:'3',src:'3_18',name:'小区房价'},
                {id:'4',src:'3_19',name:'问答'},
            ]},
        ],
        helpList:[
            {id:'1',src:'dkw_贷款-31.png',name:'我要贷款'},
            {id:'2',src:'计算器.png',name:'房贷计算'},
            {id:'3',src:'知识.png',name:'知识'},
            {id:'4',src:'扫一扫.png',name:'扫一扫'},
        ],
        likeList:[],
        city:'定位中',
        }
        componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
            data: ['1', '2', '3','4','5'],
            });
        }, 100);
    }
    render() {
        return (
            <div className={'Main'}>
                <div className={'header'}>
                    <p className={'city'}><Link to='/citylist'>{this.state.city}▼</Link></p>
                    <Flex justify="center">
                        <InputItem
                            clear
                            placeholder="挑好房，上小房产APP"
                        ><Icon type="search" size="md" /></InputItem>
                    </Flex>
                    <Link to='/position'>
                        <img src={require('../../assets/imgs/定位.png')} alt=""/>
                    </Link>
                </div>
                <div className={'banner'}>
                    <WingBlank>
                        <Carousel
                        autoplay={true}
                        infinite
                        >
                        {this.state.data.map(val => (
                            <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                src={require(`../../assets/imgs/${val}.jpg`)}
                                alt=""
                                style={{ width: '100%',height:'200px', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                    </WingBlank>
                </div>
                <div className={'navgiter'}>
                    {
                        this.state.navList.map(list=>
                            // console.log(list.nav)
                        <div className={'flex'} key={list.id}>
                            {
                                list.nav.map(item=>
                                    <div key={item.id} className={'column'}><img src={require(`../../assets/imgs/${item.src}.jpg`)} alt=""/><span>{item.name}</span></div>    
                                )
                            } 
                        </div>
                        )
                    }
                </div>
                <div className={'help'}>
                    <p>房产全百科<span>专业得买房攻略</span></p>
                    <div className={'flex'}>
                    {
                        this.state.helpList.map(help=>
                            <div key={help.id} className={'column'}><img src={require(`../../assets/imgs/${help.src}`)} alt=""/><span>{help.name}</span></div>
                        )
                    }
                    </div>
                </div>
                <div className={'like'}>
                    <p>猜你喜欢</p>
                    {
                        this.state.likeList.map(obj=>
                            <div className={'flex'} key={obj.id} onClick={this.getData.bind(this,obj)}>
                                <div className={'flex1'}>
                                    <div>
                                        <img src={`${IP}${obj.imgs}`} alt=""/>
                                    </div>
                                    <div className={'intro'}>
                                        <p>{obj.name}</p>
                                        <p>{obj.area}&nbsp;{obj.range}</p>
                                        <p>{obj.type}&nbsp;{obj.point}平</p>
                                    </div>
                                </div>
                                <div className={'price'}>{obj.price}/平</div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
    getData(obj){
        this.props.dispatch({
            type:'addHouse',
            obj
        })
    }
    componentDidMount=()=>{
        getHouse().then(res=>{
            this.setState({
                likeList:res.data
            })
        })

        
        //获取用户所在城市信息
        var _this=this
        function showCityInfo(){
            //实例化城市查询类
            var citysearch = new window.AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;
                        
                        _this.setState({city:cityinfo})
                    }
                } 
               
            });
        }
        // 调用方法
        showCityInfo();
    }
}

export default connect()(Main)