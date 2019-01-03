import * as React from 'react';
import './TopBar.css';
import {Link} from 'react-router-dom';
import ReleaseBtn from './ReleaseBtn/ReleaseBtn';
import MainPageBtn from './MainPageBtn/MainPageBtn';

export interface TopBarProps {
    ShowReleaseBtn:boolean
}

export default class TopBar extends React.Component<TopBarProps, any> {
  public render() {
    return (
      <div className="TopBar">
        <Link to={{
            pathname:"/",
            state:{}
        }}>
            首页
        </Link>
        {
          this.props.ShowReleaseBtn?<ReleaseBtn/>:""
        }
        <Link to={{
            pathname:"/editor",
            state:{}
        }}>
            写文章
        </Link>
        <MainPageBtn Show={true}/>
      </div>
    );
  }
}
