import * as React from 'react';
import {Link} from 'react-router-dom';
import './ArticleBox.css'

export interface ArticleBoxProps {
    ArticleMsg:{
        title:string,
        summary:string,
        id:string
    }
}

export default class ArticleBox extends React.Component<ArticleBoxProps, any> {
  constructor(props:ArticleBoxProps){
      super(props)
      this.state={
          title:this.props.ArticleMsg.title,
          summary:this.props.ArticleMsg.summary,
          pId:this.props.ArticleMsg.id
      }
  }

  public componentDidMount(){
      console.log(this.props)
  }
  public render() {
    return (
      <div className="ArticleBox">
        <h3>
            <Link to={{
                pathname:`/p/${this.state.pId}`,
                state:{}
            }}>
                {this.state.title}
            </Link>
        </h3>
        <article>
            {this.state.summary}
        </article>
      </div>
    );
  }
}
