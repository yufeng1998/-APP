import React, { Component } from 'react'
import BScroll from 'better-scroll'
import '../../assets/styles/cityList.scss'
import json from '../../json/citylist.json'

export default class Citylist extends Component {
    render() {
        return (
            <div className={'cityList'}>
            <p className="return" onClick={this.return.bind(this)}>返回</p>
                <div id="leftcity">
                    <ul className={'content'}>
                        <div className={'city'}>
                            <p className={'hot'}>热门城市</p>
                            <div className={'list'}>
                            {
                                json.hot.map((obj,i)=>
                                <p key={i}>{obj}</p>
                                )
                            }
                            </div>
                        </div>
                        {
                            json.list.map((obj,i)=>
                            <div className='city' key={i} id={obj.title}>
                                <p className={'hot'}>{obj.title}</p>
                                <div className={'list'}>
                                {
                                    obj.city.map((item,index)=>
                                    <p key={index}>{item}</p>
                                    )
                                }
                                
                                </div>
                            </div>
                            )
                        }
                    </ul>
                </div>
                <div className='rightList'>
                    {
                        json.list.map((obj,i)=><p key={i} onClick={this.clickRight.bind(this)}>{obj.title}</p>)
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.leftScroll=new BScroll(document.getElementById('leftcity'))
    }
    
    clickRight(e){
        this.leftScroll.scrollToElement(document.getElementById(e.target.innerHTML), 600)
    }
    return(){
        this.props.history.push('/')
    }
}
