import handler from './index'
// 就是来管理数据的
let reducer = (state = {...handler.state},action:{type:string}) => {
    // 调用dispatch执行这里的代码

    let newState = JSON.parse(JSON.stringify(state))
    for(let key in handler.actionNames){
        if(action.type === handler.actionNames[key]){
            handler.actions[handler.actionNames[key]](newState,action)
            break
        }
    }
    return newState
}
export default reducer