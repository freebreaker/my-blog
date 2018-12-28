import * as React from 'react';
import {Radio,Button} from 'antd';
import './ReleaseBox.css';


const RadioGroup = Radio.Group

interface ReleaseBoxState {
  value:number
}

export default class ReleaseBox extends React.Component<any, ReleaseBoxState> {

  public readonly state:Readonly<ReleaseBoxState> = {
    value:1
  }
  
  public handleRadioValue =(e:any) => {
    console.log('radio checked',e.target.value)
  }
  
  public render() {
    return (
      <div className="ReleaseBox">
        <p>发布文章</p>
        <h3>分类</h3>
        <RadioGroup onChange={this.handleRadioValue} defaultValue={this.state.value}>
          <Radio value={1}>技术</Radio>
          <Radio value={2}>生活</Radio>
          <Radio value={3}>闲谈</Radio>
        </RadioGroup>
        <h3 style={{marginTop:"0.5em"}}>标签</h3>
        <div className="ReleaseSubmit">
          <Button type="primary" block={true}>确认并提交</Button>
        </div>
      </div>
    );
  }
}
