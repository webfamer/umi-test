import { request } from 'umi';
import { message } from 'antd';
export const getRemoteList = async () => {
  return request('/api/users', {
    method: 'get',
  }).then((res) => {
    return res;
  });
};

export const editRecord = async ({ id, values }) => {
  return request(`/api/users/${id}`, {
    method: 'put',
    data: values,
  })
    .then((res) => {
      message.success('edit success');
    })
    .catch((res) => {
      message.error('edit Faild');
    });
};
