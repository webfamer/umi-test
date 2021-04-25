import {request} from 'umi'
export  const getRemoteList = async () => {
  return  request('/api/users',{
        method: 'get',
    }).then(res=>{
        return res
    })
}