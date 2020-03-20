import React, { Component } from 'react'
import {Flex,SearchBar} from 'antd-mobile'
import '../../assets/styles/main.scss'

export default class Main extends Component {
    render() {
        return (
            <div>
                <div className={'header'}>

                    <select name="city" id="">
                        <option value="">成都市</option>
                    </select>
                    <SearchBar placeholder="挑好房，上小房产APP"/>
                </div>
            </div>
        )
    }
}
