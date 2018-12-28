import * as React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import './Editor.css';
import TopBar from '../TopBar/TopBar';

interface EditorState {
  title:string
  text:string
}

export default class Editor extends React.Component{

  public readonly state:Readonly<EditorState> = {
    title:"",
    text:""
  }

  public handleTitle = (e:any)=>{
    console.log(e.target.value)
    this.setState({
      title:e.target.value
    })
  }

  public handleChange = (value:any) => {
    console.log(value)
    this.setState({
      text:value
    })
  };

  public render() {
    return (
      <div>
        <div>
          <TopBar Msg="写文章"/>
          <input className="ArticleTitle" type="text" onChange={this.handleTitle} placeholder="请输入标题"/>
          <SimpleMDE
            className="Editor"
            onChange={this.handleChange}
            options={{
              autofocus:true
            }}
          />
        </div>
      </div>
    );
  }
}
