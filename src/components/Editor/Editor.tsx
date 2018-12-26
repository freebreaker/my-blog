import * as React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import './Editor.css';

export default class Editor extends React.Component{
  constructor(props:any) {
    super(props);
    this.state={
      text:"",
      title:""
    }
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
          {/* <input className="ArticleTitle" type="text" onChange={this.handleTitle} value={this.state.title}/> */}
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
