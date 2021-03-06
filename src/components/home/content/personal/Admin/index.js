/**
 * Created by qoder on 16/7/19.
 */
import React, {Component} from 'react';
import {
  Panel,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
class Teacher extends Component {
  render() {
    const {data}=this.props;
    return (
      <Panel style={{border:'none'}}>
        <ListGroup fill>
          <ListGroupItem>姓名:<span className='personal-item-detail'>{data.name}</span></ListGroupItem>
          <ListGroupItem>工号:<span className='personal-item-detail'>{data.code}</span></ListGroupItem>
          <ListGroupItem>权限:<span className='personal-item-detail'>{data.role}</span></ListGroupItem>
          <ListGroupItem>院系:<span className='personal-item-detail'>{data.academy}</span></ListGroupItem>
          <ListGroupItem>邮箱:<span className='personal-item-detail'>{data.email}</span></ListGroupItem>
          <ListGroupItem>手机号:<span className='personal-item-detail'>{data.phone}</span></ListGroupItem>
        </ListGroup>
      </Panel>
    )
  }
}


export  default Teacher;
