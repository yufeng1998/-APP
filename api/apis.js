import axios from 'axios'
import qs from 'qs'

export var IP='http://localhost:80'

let req = axios.create({
    baseURL:IP,
    setTimeout: 1000
})

// 登录接口
export function login(acc,pwd){
    return req.post('/login.php',qs.stringify({acc,pwd}))
}

//获取房产列表接口
export function getHouse(){
    return req.get('/gethouselist.php')
}

//注册接口
export function register(acc,pwd){
    return req.post('/reg.php',qs.stringify({acc,pwd}))
}

//获取验证码接口
export function code(){
    return req.get('/valitecode.php')
}