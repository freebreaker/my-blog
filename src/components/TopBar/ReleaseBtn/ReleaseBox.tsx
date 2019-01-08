import * as React from 'react';
import {Radio,Button} from 'antd';
// import axios from 'axios';
import './ReleaseBox.css';

const RadioGroup = Radio.Group

interface ReleaseBoxState {
  value:number
}

interface ReleaseBoxProps {
  handleRadioValue:(e:any)=>void,
  handleArticleSubmit:(e:any)=>void
}

export default class ReleaseBox extends React.Component<ReleaseBoxProps, ReleaseBoxState> {

  public readonly state:Readonly<ReleaseBoxState> = {
    value:1
  }

  public render() {
    return (
      <div className="ReleaseBox">
        <p>发布文章</p>
        <h3>分类</h3>
        <RadioGroup onChange={this.props.handleRadioValue} defaultValue={this.state.value}>
          <Radio value={1}>技术</Radio>
          <Radio value={2}>生活</Radio>
          <Radio value={3}>闲谈</Radio>
        </RadioGroup>
        <h3 style={{marginTop:"0.5em"}}>标签</h3>
        <div className="ReleaseSubmit">
          <Button type="primary" block={true} onClick={this.props.handleArticleSubmit}>确认并提交</Button>
        </div>
      </div>
    );
  }
}
