import * as React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import './Editor.css';

interface EditorState {
  title:string
}

export default class Editor extends React.Component{

  public state:Readonly<EditorState> = {
    title:""
  }

  public handleTitle = (value:any)=>{
    console.log(value)
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
        <div className="Editor">
          <input className="ArticleTitle" type="text" onChange={this.handleTitle} placeholder="请输入标题"/>
          <SimpleMDE
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
