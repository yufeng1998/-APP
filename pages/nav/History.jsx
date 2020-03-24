import React, { Component } from 'react'
import {connect} from 'react-redux'
import {IP} from '../../api/apis'
import BScroll from 'better-scroll'
import '../../assets/styles/history.scss'

class History extends Component {
    render() {
        return (
            <div className="history">
                <div className='like' id="historyList">
                    <ul className="content">
                    <p className="yours">您的浏览记录</p>
                    {
                        this.props.houseList.map((obj,i)=>
                            <div className={'flex'} key={i}>
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
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        new BScroll(document.getElementById('historyList'))
    }
}

export default connect((state=>{
    return {houseList:state}
}
))(History)