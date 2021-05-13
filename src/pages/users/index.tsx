import { React, useState } from 'react';
import { Table, Tag, Space, Popconfirm } from 'antd';
import UserModel from './components/UserModel';
import { connect } from 'umi';
const index = ({ users, dispatch }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [record, setRecord] = useState(undefined);
  const confirm = (id) => {
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
      render: (text, record) => (
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

  const editHandler = (record) => {
    setModalVisible(true);
    setRecord(record);
  };
  const closeHandler = () => {
    setModalVisible(false);
  };
  const onFinish = (values: any) => {
    const id = record.id;
    dispatch({
      type: 'users/edit',
      payload: {
        id,
        values,
      },
    });
    setModalVisible(false);
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={users.data}
        className="pageList"
        rowKey="id"
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

const mapStateToProps = ({ users }) => {
  return { users };
};
export default connect(mapStateToProps)(index);
