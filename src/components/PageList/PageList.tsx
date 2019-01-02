import * as React from 'react';
import axios from 'axios';

export default class PageList extends React.Component<any, any> {
    public componentDidMount() {
        axios({
            method:"get",
            url:"/category?category_id=1",
        }).then((res)=>{
            console.log(res)
        })
    }
  public render() {
    return (
      <div>
        d
      </div>
    );
  }
}
