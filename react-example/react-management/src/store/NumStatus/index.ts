const store = {
    state: {
        num: 20
    },
    actions:{
        // 只放同步的方法
        add1(newState:{num:number},action:{type:string}){
            newState.num++
        },
        add2(newState:{num:number},action:{type:string,val:number}){
            newState.num+=action.val
        },
        add3(newState:{num:number},action:{type:string,val:number}){
            newState.num+=action.val
        }
    },
    // 优化redux-thunk的异步写法（模仿Vuex的写法）
    asyncActions:{
        asyncAdd1(dispatch:Function){
            setTimeout(() => {
                dispatch({type: 'add1'})
            },1000)
        }
    },
    // 名字统一管理
    // actionNames:{
    //     add1:'add1',
    //     add2:'add2'
    // },
    actionNames: {}
}
let actionNames = {}
for(let key in store.actions){
    actionNames[key] = key
}
store.actionNames = actionNames
export default store
// 封装的目的：最终是有利于我们的开发或者维护
// 封装的思路是：将来开发的时候只需要把数据写入和方法写入到这个状态文件中，例如：XxxxStatus/index.ts，而不是需要再去操作其他的文件。（我们往这个方向去封装）