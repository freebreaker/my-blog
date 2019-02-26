import * as React from 'react';
import './TopBar.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ReleaseBtn from './ReleaseBtn/ReleaseBtn';
import MainPageBtn from './MainPageBtn/MainPageBtn';
import DraftBtn from './DraftBox/DraftBtn';
import LogInBox from '../LogInForm/LogInBox';

export interface TopBarProps {
    ShowReleaseBtn:boolean
    login:{
      isLogIn:boolean
    }
}

class TopBarWrap extends React.Component<TopBarProps, any> {
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
          this.props.ShowReleaseBtn?<DraftBtn/>:""
        }
        {
          this.props.ShowReleaseBtn?<ReleaseBtn/>:""
        }
        <Link to={{
            pathname:"/editor/new",
            state:{}
        }}>
            写文章
        </Link>
        {
          this.props.login.isLogIn?<MainPageBtn Show={true}/>
          :<LogInBox/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state:any,ownProps:any)=>{
  return {
    login:state.login,
  }
}

const mapDispatchToProps = {}

const TopBar = connect(mapStateToProps, mapDispatchToProps)(TopBarWrap);

export default TopBar;