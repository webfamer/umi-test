import React from 'react';
import { Modal, Button } from 'antd';

const UserModel = (props) => {
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={props.visible}
        onCancel={props.closeHandler}
      >
        {JSON.stringify(props.record)}
      </Modal>
    </div>
  );
};

export default UserModel;
