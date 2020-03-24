import React, { Component } from 'react'
import '../../assets/styles/position.scss'

export default class Position extends Component {
    render() {
        return (
            <div className='position'>
                <p className="return" onClick={this.return.bind(this)}>返回</p>
                <div id="container"></div>
                <div className="info">
                    <p id='info'></p>
                </div>
            </div>
        )
    }
    return(){
        this.props.history.push('/')
    }
    componentDidMount(){
        var map = new window.AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        //获取用户所在城市信息
        function showCityInfo() {
            //实例化城市查询类
            var citysearch = new window.AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;
                        var citybounds = result.bounds;
                        document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                        //地图显示当前城市
                        map.setBounds(citybounds);
                    }
                } else {
                    document.getElementById('info').innerHTML = result.info;
                }
            });
        }
        showCityInfo();
    }
}
