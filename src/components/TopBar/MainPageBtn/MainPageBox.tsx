import * as React from 'react';
import {Menu} from 'antd';
import {Icon} from 'antd';
import {Link} from 'react-router-dom';
import './MainPageBox.css';

const MainPageBox = (
    <Menu>
      <Menu.Item key="0">
        <Link to={{
          pathname:"/draft",
          state:{}
        }}>
          <Icon type="user" />
          <span className="MainPageTitle">我的主页</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to={{
            pathname:"/draft",
            state:{}
          }}>
          <Icon type="file-text" />
          <span className="MainPageTitle">草稿</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={{
            pathname:"/draft",
            state:{}
          }}>
          <Icon type="logout" />
          <span className="MainPageTitle">退出</span>
        </Link>
      </Menu.Item>
    </Menu>
);

export default MainPageBox;