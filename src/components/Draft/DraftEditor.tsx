import * as React from 'react';
import {connect} from 'react-redux'
import SimpleMDE from 'react-simplemde-editor';
import TopBar from '../TopBar/TopBar';
import {storeArticle,storeArticleTitle,storeArticleId} from 'src/actions/index'
import {updateDraft,getDraft} from 'src/actions/draft'

interface EditorState {
  title:string
  text:string
}

interface EditorProps {
  draft:{
    title:string
    content:string
  }
  location:any
  storeArticleId:(value:string)=>void,
  storeArticle:(value:string)=>void,
   storeArticleTitle:(value:string)=>void,
  getDraft:(getDraftParams:{ 
    draftId:string
  })=>void,
  updateDraft:(draftMsg:{
    draftId:string,
    title:string,
    markdown:string,
    published:boolean
})=>void,
}

class DraftEditor extends React.Component<EditorProps,EditorState>{

  constructor(props:any){
    super(props)
    this.state ={
      title:this.props.draft.title,
      text:this.props.draft.content
    }
  }

  public componentDidMount(){

    const {draftId,title,markdown} = this.props.location.state
    console.log(this.props.location.state)
    this.props.getDraft({"draftId":draftId})

    this.props.storeArticleId(draftId)

    this.props.storeArticleTitle(title)

    this.props.storeArticle(markdown)

  }

  public debounce =(method:any,context:any)=>{
    
    const draftId = this.props.location.state.draftId
    clearTimeout(method.timeout)
    method.timeout = setTimeout(() => {
      method.call(context,{
        "draftId":draftId,
        title:this.state.title||this.props.draft.title,
        markdown:this.state.text||this.props.draft.content,
        published:false
      })
    }, 1500);
  }

  public handleTitle = (e:any)=>{

    this.setState({
      title:e.target.value
    })

    this.props.storeArticleTitle(e.target.value)

    this.debounce(this.handleUpdateDraft,this)

  }

  public handleChange = (value:any) => {
    this.setState({
      text:value
    })

    this.props.storeArticle(value)  // store article

    this.debounce(this.handleUpdateDraft,this)

  };

  public handleUpdateDraft = (draftMsg:{
      draftId:string,
      title:string,
      markdown:string,
      published:boolean
  })=>{
    this.props.updateDraft(draftMsg)
  }


  public render() {
    const {title,content} = this.props.draft
    return (
      <div>
        <div>
          <TopBar ShowReleaseBtn={true}/>
          <input className="ArticleTitle" type="text" onChange={this.handleTitle} placeholder="请输入标题" defaultValue={title||""}
          autoFocus={true}
          />
          <SimpleMDE
            className="Editor"
            onChange={this.handleChange}
            value={content||""}
            options={{
              autosave: {
                enabled: true,
                uniqueId:this.props.location.state.draftId,
                delay:1000
              },
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: {}, ownProps: any) => {
  return state
};

const mapDispatchToProps = {storeArticle,storeArticleTitle,storeArticleId,updateDraft,getDraft};

export default connect(mapStateToProps, mapDispatchToProps)(DraftEditor);
