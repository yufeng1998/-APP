import {createStore} from 'redux'


//state:store目前存储的值  action:本次pispatch出来的值
var store = createStore(function(state,action){
    //根据action.type来决定返回的值
    switch(action.type){
        case 'addHouse':return [action.obj,...state]

        //设置默认值
        default:return []
    }

})


export default store;