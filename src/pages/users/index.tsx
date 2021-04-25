import React from 'react'
import { Table, Tag, Space } from 'antd';
import {connect} from 'umi'
const index= ({users})=> {
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
          key:'action',
          render:(text,record)=>(
            <span>
              <a >Edit</a>&nbsp;&nbsp;<a>Delete</a>
            </span>
          )
        },
      ];
      

    return (
        <div>
            <Table columns={columns} dataSource={users.data} className="pageList"/>
        </div>
    )
}

const mapStateToProps =({users})=>{
    return { users,}
}
export default connect(mapStateToProps)(index)