/**
 * Created by qoder on 16-6-14.
 */
import React from 'react';
import {Link} from 'react-router';
import {logout} from '../../../library/logout';
require('./index.css');

const DropMenu = React.createClass({
  render: function () {
    const {myMsg}=this.props;
    return (
      <ul
        style={{display: this.props.Show}}
        className="dropdown-menu2 animated fadeInRight m-t-xs">
        <li><Link to="home/personal">个人资料</Link>
        </li>
        <li><a href="javascript:;" onClick={this.props.showChanPass}>修改密码</a>
        </li>
        {myMsg.role != '毕业生' ? "" : (<li
          onClick={()=>{this.props.getGraduate(true)}}
        ><a href="javascript:;">更多资料</a></li>)}
        <li className="divider"/>
        <li><a href="javascript:;" onClick={logout}>安全退出</a>
        </li>
      </ul>
    )

  }
});

export  default DropMenu;
