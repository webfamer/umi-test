import { Reducer, Effect, Subscription } from 'umi';
import { getRemoteList, editRecord, deleteRecord, addRecord } from './service';
import { message } from 'antd';
import {UserState} from './data'
interface UserModelType {
  namespace: string;
  state: UserState;
  reducers: {
    getList: Reducer<UserState>;
  };
  effects: {
    getRemote: Effect;
    add: Effect;
    edit: Effect;
    delete: Effect;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const UserModel: UserModelType = {
  namespace: 'users',
  state: {
    data: [],
    meta: {
      total: 0,
      per_page: 5,
      page: 1
    }
  },
  reducers: {
    getList(state, { payload }) {
      return payload;
    },
  },
  effects: {
    *getRemote(action, { put, call }) {
      const data = yield call(getRemoteList);
      if (data) {
        yield put({
          type: 'getList',
          payload: data,
        });
      }
    },
    *add({ payload: { id, values } }, { put, call }) {
      const data = yield call(addRecord, { values });
      if (data) {
        message.success('Add success');
        yield put({
          type: 'getRemote',
        });
      } else {
        message.error('Add error');
      }
    },
    *edit({ payload: { id, values } }, { put, call }) {
      const data = yield call(editRecord, { id, values });
      if (data) {
        message.success('Edit success');
        yield put({
          type: 'getRemote',
        });
      } else {
        message.error('Edit error');
      }
    },
    *delete({ payload: { id } }, { put, call }) {
      console.log(id);
      const data = yield call(deleteRecord, { id });
      if (data) {
        message.success('Delete success');
        yield put({
          type: 'getRemote',
        });
      } else {
        message.error('Delete error');
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location, action) => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'getRemote',
          });
        }
      });
    },
  },
};

export default UserModel;
