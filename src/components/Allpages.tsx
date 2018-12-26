import * as React from 'react';
import axios from 'axios';
import {Tabs} from 'antd';
import './Allpages.css';
import TopBar from './TopBar/TopBar';

const TabPane = Tabs.TabPane

export default class Allpages extends React.Component{
  public componentDidMount() {
    axios({
      method:"get",
      url:"/category"
    }).then((res)=>{
      console.log(res)
    })
  }

  public callback(key:any){
    console.log(key)
  }

  public render() {
    return (
      <div>
          <TopBar Msg="发表文章"/>
          <div className="TabBar">
              <Tabs defaultActiveKey="1" onChange={this.callback} tabBarGutter={150} size="large">
                <TabPane tab="技术" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="生活" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="闲谈" key="3">Content of Tab Pane 3</TabPane>
              </Tabs>
          </div>
      </div>
    );
  }
}
