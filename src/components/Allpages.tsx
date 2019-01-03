import * as React from 'react';
import axios from 'axios';
import {Tabs} from 'antd';
import './Allpages.css';
import TopBar from './TopBar/TopBar';
import PageList from './PageList/PageList';

const TabPane = Tabs.TabPane

interface AllpagesState {
  categoryList:object[]
}

export default class Allpages extends React.Component<any,AllpagesState>{
  constructor(props:any){
    super(props)
    this.state ={
      categoryList:[{
        id:"1"
      }]
    }
  }

  public callback(key:any){
    console.log(key)
  }

  public componentDidMount(){
    axios({
      url:"/categorylist",
      method:"get"
    })
    .then((res)=>{
      this.setState({
        categoryList:res.data
      })
    })
  }

  public render() {

    const TabPaneGroup = this.state.categoryList.map((item:{id:string,name:string},index)=>{
      return (
        <TabPane tab={item.name} key={item.id}>
          <PageList CategoryId={item.id}/>
        </TabPane>
      )
    })

    return (
      <div>
          <TopBar ShowReleaseBtn={false}/>
          <div className="TabBar">
              <Tabs defaultActiveKey="1" onChange={this.callback} tabBarGutter={150} size="large">
                {/* <TabPane tab="技术" key="1">
                  <PageList/>
                </TabPane>
                <TabPane tab="生活" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="闲谈" key="3">Content of Tab Pane 3</TabPane> */}
                {TabPaneGroup}
              </Tabs>
          </div>
      </div>
    );
  }
}
