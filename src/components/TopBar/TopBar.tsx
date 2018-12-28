import * as React from 'react';
import './TopBar.css';
import {Link} from 'react-router-dom';
import ReleaseBtn from '../ReleaseBtn/ReleaseBtn';

export interface TopBarProps {
    Msg:string
}

export default class TopBar extends React.Component<TopBarProps, any> {
  public render() {
    return (
      <div className="TopBar">
        <ReleaseBtn show={true}/>
        <Link to={{
            pathname:"/editor",
            state:{}
        }}>
            {this.props.Msg}
        </Link>
      </div>
    );
  }
}
