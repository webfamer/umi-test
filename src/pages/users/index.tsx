import { React, useState,FC } from 'react';
import { Table, Tag, Space, Popconfirm,Button } from 'antd';
import UserModel from './components/UserModel';
import { connect,Dispatch,Loading } from 'umi';
import {UserState,SingleUserType} from './data'
interface UserPageProps{
  users: UserState;
  dispatch:Dispatch;
  userListLoading:boolean;
}
const UserListPage:FC<UserPageProps> = ({ users, dispatch,userListLoading }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [record, setRecord] = useState<SingleUserType | undefined>(undefined);
  const confirm = (id:number) => {
    dispatch({
      type: 'users/delete',
      payload: { id },
    });
    console.log('Click on Yes');
  };
  const cancel = (e) => {
    console.log(e);
    console.log('Click on No');
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text:string) =><a>{text}</a>
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'create_time',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: 'update_time',
      dataIndex: 'update_time',
      key: 'update_time',
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text:String, record:SingleUserType) => (
        <span>
          <a
            onClick={() => {
              editHandler(record);
            }}
          >
            Edit
          </a>
          &nbsp;&nbsp;
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => {
              confirm(record.id);
            }}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a>Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  const editHandler = (record:SingleUserType) => {
    setModalVisible(true);
    setRecord(record);
  };
  const closeHandler = () => {
    setModalVisible(false);
  };
  const onFinish = (values: any) => {
    let id = 0;
    if(record){
      id = record.id;
    }
    if(id){
      dispatch({
        type: 'users/edit',
        payload: {
          id,
          values,
        },
      });
    }else{
      dispatch({
        type: 'users/add',
        payload: {
          values,
        },
      });
    }
    setModalVisible(false);
  };
  const addHandler=()=>{
    setRecord(undefined);
    setModalVisible(true);
  }
  return (
    <div 
    className="pageList"
    >
      <Button type="primary" onClick={addHandler}>Add</Button>
      <Table
        columns={columns}
        dataSource={users.data}
        rowKey="id"
        loading={userListLoading}
      />
      <UserModel
        visible={modalVisible}
        closeHandler={closeHandler}
        record={record}
        onFinish={onFinish}
      ></UserModel>
    </div>
  );
};

const mapStateToProps = ({ users,loading }:{ users:UserState,loading:Loading }) => {
  return { 
    users,
    userListLoading: loading.models.users
  };
};
export default connect(mapStateToProps)(UserListPage);
