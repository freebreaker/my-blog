import * as React from 'react';
import './ReleaseBtn.css';
import ReleaseBox from './ReleaseBox';
import {connect} from 'react-redux';
import {storeCategoryName} from 'src/actions/index';
import axios from 'axios';


interface ReleaseBtnState {
    isOpen:boolean
}

interface ReleaseBtnProps {
  article:{
    id:string
    content:string,
    title:string,
    category:number
  },
  storeCategoryName:(value:string)=>void
}

class ReleaseBtn extends React.Component<ReleaseBtnProps,any> {

  public readonly state:Readonly<ReleaseBtnState> = {
    isOpen:false
  }

  public handleOpen = ()=>{
    const openState = this.state.isOpen
    this.setState({
      isOpen:!openState
    })
  }

  public handleRadioValue =(e:any) => {
    this.props.storeCategoryName(e.target.value)
  }

  public ArticleSubmit = (Data:object)=>{
    axios({
      method:"post",
      url:"/article",
      data:Data
    })
    .then((res)=>{
      console.log(res)
    })
  }

  public handleArticleSubmit = (e:any)=>{
    const {id,content,title,category} = this.props.article
    const postData = {
      "articleId":id,
      "content":content,
      "title":title,
      "category":category
    }
    if(!content||!title||!category){
      alert("XXX can not be empty")
    }else{
      this.ArticleSubmit(postData)
    }
  }

  public render() {
    return (
      <div className="Release">
        <span onClick={this.handleOpen}>发布</span>
        {
          this.state.isOpen?<ReleaseBox
          handleArticleSubmit={this.handleArticleSubmit}
          handleRadioValue={this.handleRadioValue}
          />:""
        }
      </div>
    );
  }
}


const mapStateToProps = (state: {}, ownProps: any) => {
  return state
};

const mapDispatchToProps = {storeCategoryName};

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseBtn);