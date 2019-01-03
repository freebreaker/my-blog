import * as React from 'react';
import {Marked} from 'marked-ts';
import axios from 'axios';
import TopBar from '../TopBar/TopBar';

export default class Article extends React.Component<any, any> {
  constructor(props:any){
        super(props)
        this.state={
            category_id:1,
            title:"",
            content:""
        }
    }
  public renderMarked(content:string){
    const target:HTMLElement = document.getElementById('article')||document.createElement("div")
    target.innerHTML = Marked.parse(content)
  }
  public componentDidMount(){
    const Id = this.props.match.params.id
    axios({
        url:`/p?id=${Id}`,
        method:"get"
    })
    .then((res)=>{
        console.log(res.data)
        this.setState({
          category_id:res.data.category_id,
          title:res.data.title,
          content:res.data.summary
        })
        this.renderMarked(this.state.content)  // render marked string
    })
  }
  public render() 
  {
    const {title} = this.state
    return (
      <div>
          <TopBar ShowReleaseBtn={false}/>
          <h1>{title}</h1>
          <div id="article"/>
      </div>
    );
  }
}
