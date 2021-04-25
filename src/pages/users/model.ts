import {Reducer,Effect,Subscription} from 'umi'
import {getRemoteList} from './service'
interface UserModelType{
    namespace:String,
    state:{},
    reducers:{
        getList:Reducer
    },
    effects:{
        getRemote:Effect
    },
    subscriptions:{
        setup:Subscription
    }
}

const UserModel:UserModelType ={
    namespace:'users',
    state:{},
    reducers:{
        getList(state,{payload}){
           
              return payload
        }
    },
    effects:{
        *getRemote(action,{put,call}){
            const data = yield call(getRemoteList)
             yield put({
                  type: 'getList',
                  payload:data
              })
        }
    },
    subscriptions:{
        setup({dispatch,history}){
            history.listen((location,action)=>{
                if(location.pathname==='/users'){
                    dispatch({
                        type:'getRemote'
                    })
                }
            })
        }
    },
}

export default UserModel