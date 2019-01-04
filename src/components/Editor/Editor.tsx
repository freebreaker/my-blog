import * as React from 'react';
import {connect} from 'react-redux'
import SimpleMDE from 'react-simplemde-editor';
import './Editor.css';
import TopBar from '../TopBar/TopBar';
import {storeArticle,storeArticleTitle} from 'src/actions/index'

interface EditorState {
  title:string
  text:string
}

interface EditorProps {
  storeArticle:(value:string)=>void,
  storeArticleTitle:(value:string)=>void
}

class Editor extends React.Component<EditorProps,EditorState>{

  constructor(props:any){
    super(props)
    this.state ={
      title:"",
      text:""
    }
  }

  public componentDidMount(){
    console.log(this.props)
  }

  public handleTitle = (e:any)=>{
    this.setState({
      title:e.target.value
    })
    this.props.storeArticleTitle(e.target.value)
  }

  public handleChange = (value:any) => {
    this.setState({
      text:value
    })
    this.props.storeArticle(value)
  };

  public render() {
    return (
      <div>
        <div>
          <TopBar ShowReleaseBtn={true}/>
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

const mapStateToProps = (state: {}, ownProps: any) => {
  return state
};

const mapDispatchToProps = {storeArticle,storeArticleTitle};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
