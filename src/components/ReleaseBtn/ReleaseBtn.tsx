import * as React from 'react';
import './ReleaseBtn.css';
import ReleaseBox from './ReleaseBox';

interface ReleaseBtnProps {
    show:boolean
}

interface ReleaseBtnState {
    isOpen:boolean
}

export default class ReleaseBtn extends React.Component<ReleaseBtnProps, any> {

  public readonly state:Readonly<ReleaseBtnState> = {
    isOpen:false
  }

  public handleOpen = ()=>{
    const openState = this.state.isOpen
    this.setState({
      isOpen:!openState
    })
  }

  public render() {
    return (
      <div className="Release">
        <span onClick={this.handleOpen}>发布</span>
        {
          this.state.isOpen?<ReleaseBox/>:""
        }
      </div>
    );
  }
}
