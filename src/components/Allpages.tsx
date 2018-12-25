import * as React from 'react';
import axios from 'axios';
import {Button} from 'antd';


export default class Allpages extends React.Component{
  public componentDidMount() {
    axios({
      method:"get",
      url:"/category"
    }).then((res)=>{
      console.log(res)
    })
  }
  public render() {
    return (
      <div>
        <Button type="primary">bbbbb</Button>
      </div>
    );
  }
}
