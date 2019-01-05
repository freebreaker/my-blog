import * as React from 'react';
import {Link} from 'react-router-dom';
import './DraftBtn.css';


export default class DraftBtn extends React.Component<any, any> {
  public render() {
    return (
      <div className="DraftBtn">
          <span>自动保存至</span>
          <Link 
          className="DraftLink"
          to={{
            pathname:"/draft",
            state:{}
          }}>
            草稿
        </Link>
      </div>
    );
  }
}

