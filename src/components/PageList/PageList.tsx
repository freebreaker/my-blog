import * as React from 'react';
import axios from 'axios';
import ArticleBox from '../Article/ArticleBox/ArticleBox';


interface PageListState {
  articleBoxList:object[]
}

interface PageListProps {
  CategoryId:string
}

export default class PageList extends React.Component<PageListProps, PageListState> {
    constructor(props:PageListProps){
        super(props)
        this.state={
          articleBoxList:[]
        }
    }
    public componentDidMount() {
        const id = this.props.CategoryId
        axios({
            method:"get",
            url:`/category?category_id=${id}`,
        }).then((res)=>{
            this.setState({
              articleBoxList:res.data
            })
        })
    }
  public render() {

    const ArticleBoxes = this.state.articleBoxList.map((item:{title:string,summary:string,id:string},index)=>{
      return (
        <ArticleBox ArticleMsg={item} key={index}/>
      )
    })

    return (
      <div>
        {ArticleBoxes}
      </div>
    );
  }
}
