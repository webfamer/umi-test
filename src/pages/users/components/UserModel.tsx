import { React, useEffect, FC } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import {SingleUserType} from '../data'
interface UserModelProps {
  visible:boolean;
  record:SingleUserType|undefined;
  closeHandler:() => void;
  onFinish:(values: any)=>void;
}

const UserModel:FC<UserModelProps> = (props) => {
  const [form] = Form.useForm();
  const { visible, record, closeHandler, onFinish } = props;
  useEffect(() => {
    if (record === undefined) {
      form.resetFields();
    } else {
      form.setFieldsValue(record);

    }
  }, [visible]);
  const onOk = () => {
    form.submit();
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onCancel={closeHandler}
        onOk={onOk}
        forceRender
      >
        <Form
          name="basic"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Create Time"
            name="create_time"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserModel;
