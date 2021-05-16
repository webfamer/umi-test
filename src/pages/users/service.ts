import request, { extend } from 'umi-request';
import { message } from 'antd';

const errorHandler = function(error:any) {
  if (error.response) {
    // 请求已发送但服务端返回状态码非 2xx 的响应
    if(error.response.status>400){
      message.error(error.data.message?error.data.message:error.data)
    }
    console.log(error.response.status);
    console.log(error.data&&error.data.message);
  } else {
    // 请求初始化时出错或者没有响应返回的异常
    console.log('网络错误');
  }

  // throw error; // 如果throw. 错误将继续抛出.

  // 如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
  // return {some: 'data'};
};
const extendRequest = extend({ errorHandler });

export const getRemoteList = async () => {
  return extendRequest('/api/users', {
    method: 'get',
  }).then((res) => {
    return res;
  }).catch(()=>{
    return false
  });
};
export const addRecord = async ({  values }:{values:any}) => {
  return extendRequest(`/api/users`, {
    method: 'post',
    data: values,
  })
    .then((res) => {
      return true
    })
    .catch((res) => {
      return false
    });
};
export const editRecord = async ({ id, values }:{ id:number, values:any} ) => {
  return extendRequest(`/api/users/${id}`, {
    method: 'put',
    data: values,
  })
    .then((res) => {
      return true
    })
    .catch((res) => {
      return false
    });
};

export const deleteRecord = async ({ id }:{id:number}) => {
  return extendRequest(`/api/users/${id}`, {
    method: 'delete',
  })
    .then((res) => {
      return true
    })
    .catch((res) => {
    return false
    });
};
