import * as React from 'react';
import {connect} from 'react-redux';
import SimpleMDE from 'react-simplemde-editor';
import './Editor.css';
import TopBar from '../TopBar/TopBar';
// import Connect from '../../util/connect';
import {storeArticle} from 'src/actions/index';

interface EditorState {
  title:string
  text:string
}

const mapStateToProps = (state:any) => {
  return state;
} 

// 方法
const actionCreators = [storeArticle];


@connect(mapStateToProps, [actionCreators])


class EditorWrap extends React.Component{

  public readonly state:Readonly<EditorState> = {
    title:"",
    text:""
  }

  public componentDidMount(){
    console.log(this.props)
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
          />
        </div>
      </div>
    );
  }
}

const Editor = connect(mapStateToProps, actionCreators)(EditorWrap);
export default Editor