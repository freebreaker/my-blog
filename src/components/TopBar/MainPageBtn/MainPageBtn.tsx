import * as React from 'react';
import {Dropdown} from 'antd';
import './MainPageBtn.css';
import MainPageBox from './MainPageBox';

export interface MainPageBtnProps {
    Show:boolean
}

export default class MainPageBtn extends React.Component<MainPageBtnProps, any> {
  public render() {
    return (
      <div className="MainPageBtn">
          <Dropdown overlay={MainPageBox} trigger={['click']} placement="bottomCenter">
                <a className="ant-dropdown-link" href="#">
                    主页
                </a>
            </Dropdown>,
      </div>
    );
  }
}
