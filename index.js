import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'antd-mobile/dist/antd-mobile.css'
import store from './store/index'
import {Provider} from 'react-redux'
import './assets/styles/index.scss'


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

