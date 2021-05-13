import { Reducer, Effect, Subscription } from 'umi';
import { getRemoteList, editRecord, deleteRecord } from './service';
interface UserModelType {
  namespace: String;
  state: {};
  reducers: {
    getList: Reducer;
  };
  effects: {
    getRemote: Effect;
    edit: Effect;
    delete: Effect;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const UserModel: UserModelType = {
  namespace: 'users',
  state: {},
  reducers: {
    getList(state, { payload }) {
      return payload;
    },
  },
  effects: {
    *getRemote(action, { put, call }) {
      const data = yield call(getRemoteList);
      yield put({
        type: 'getList',
        payload: data,
      });
    },
    *edit({ payload: { id, values } }, { put, call }) {
      const data = yield call(editRecord, { id, values });
      yield put({
        type: 'getRemote',
      });
    },
    *delete({ payload: { id } }, { put, call }) {
      console.log(id);
      const data = yield call(deleteRecord, { id });
      yield put({
        type: 'getRemote',
      });
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
