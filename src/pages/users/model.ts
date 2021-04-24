import {Reducer,Effect,Subscription} from 'umi'

interface UserModelType{
    namespace:String,
    state:{},
    reducers:{
        getList:Reducer
    },
    effects:{},
    subscriptions:{
        setup:Subscription
    }
}

const UserModel:UserModelType ={
    namespace:'users',
    state:{},
    reducers:{
        getList(state,action){
            const data = [
                {
                  key: '1',
                  name: 'John Brown',
                  age: 32,
                  address: 'New York No. 1 Lake Park',
                  tags: ['nice', 'developer'],
                },
                {
                  key: '2',
                  name: 'Jim Green',
                  age: 42,
                  address: 'London No. 1 Lake Park',
                  tags: ['loser'],
                },
                {
                  key: '3',
                  name: 'Joe Black',
                  age: 32,
                  address: 'Sidney No. 1 Lake Park',
                  tags: ['cool', 'teacher'],
                },
              ];
              return data
        }
    },
    effects:{
        
    },
    subscriptions:{
        setup({dispatch,history}){
            history.listen((location,action)=>{
                if(location.pathname==='/users'){
                    dispatch({
                        type:'getList'
                    })
                }
            })
        }
    },
}

export default UserModel