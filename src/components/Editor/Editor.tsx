import * as React from 'react';
import {connect} from 'react-redux'
import SimpleMDE from 'react-simplemde-editor';
import './Editor.css';
import TopBar from '../TopBar/TopBar';
import {storeArticle,storeArticleTitle} from 'src/actions/index'
import {createDraft,storeDraft} from 'src/actions/draft'
import {v1} from 'node-uuid';

// const v1Id = v1()

interface EditorState {
  title:string
  text:string
}

interface EditorProps {
  history:any
  storeArticle:(value:string)=>void,
  storeArticleTitle:(value:string)=>void,
  createDraft:(draftMsg:{
      draftId:string,
      title:string,
      markdown:string,
      published:boolean
  })=>void,
  storeDraft:(storeDraftMsgs:{
    title:string,
    markdown:string,
  })=>void
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

    const v1Id = v1()

    this.setState({
      title:e.target.value
    })

    this.props.storeArticleTitle(e.target.value)

    this.props.createDraft({
      draftId:v1Id,
      title:e.target.value,
      markdown:this.state.text,
      published:false
    })

    this.props.storeDraft({
      title:e.target.value,
      markdown:this.state.text
    })

    this.props.history.push(`/editor/${v1Id}`,{
      draftId:v1Id
    })

  }

  public handleChange = (value:any) => {
    console.log(value)
    const v1Id = v1()

    this.setState({
      text:value
    })

    this.props.storeArticle(value)  // store article

    this.props.createDraft({
      draftId:v1Id,
      title:this.state.title,
      markdown:value,
      published:false
    })

    this.props.history.push(`/editor/${v1Id}`,{
      draftId:v1Id
    })

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
            value={this.state.text}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: {}, ownProps: any) => {
  return state
};

const mapDispatchToProps = {storeArticle,storeArticleTitle,storeDraft,createDraft};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
