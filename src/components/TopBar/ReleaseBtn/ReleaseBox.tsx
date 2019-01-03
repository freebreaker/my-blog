import * as React from 'react';
import {Radio,Button} from 'antd';
import axios from 'axios';
import {connect} from 'react-redux';
import './ReleaseBox.css';
import {storeCategoryName} from 'src/actions/index';

const RadioGroup = Radio.Group

interface ReleaseBoxState {
  value:number
}

interface ReleaseBoxProps {
  article:{
    content:string,
    title:string,
    category:number
  },
  storeCategoryName:(value:string)=>void
}

class ReleaseBox extends React.Component<ReleaseBoxProps, ReleaseBoxState> {

  public readonly state:Readonly<ReleaseBoxState> = {
    value:1
  }
  
  public handleRadioValue =(e:any) => {
    console.log('radio checked',e.target.value)
    this.props.storeCategoryName(e.target.value)
  }

  public componentDidMount(){
    console.log(this.props)
  }

  public ArticleSubmit = (Data:object)=>{
    axios({
      method:"post",
      url:"/article",
      data:Data
    })
    .then((res)=>{
      console.log(res)
      console.log(this.props)
    })
  }
  
  public handleArticleSubmit = (e:any)=>{
    const {content,title,category} = this.props.article
    const postData = {
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
      <div className="ReleaseBox">
        <p>发布文章</p>
        <h3>分类</h3>
        <RadioGroup onChange={this.handleRadioValue} defaultValue={this.state.value}>
          <Radio value={1}>技术</Radio>
          <Radio value={2}>生活</Radio>
          <Radio value={3}>闲谈</Radio>
        </RadioGroup>
        <h3 style={{marginTop:"0.5em"}}>标签</h3>
        <div className="ReleaseSubmit">
          <Button type="primary" block={true} onClick={this.handleArticleSubmit}>确认并提交</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: {}, ownProps: any) => {
  return state
};

const mapDispatchToProps = {storeCategoryName};

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseBox);