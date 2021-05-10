import { request } from 'umi';
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
      console.log('success');
    })
    .catch((res) => {
      console.log('Faild');
    });
};
