import * as React from 'react';
import {Link} from "react-router-dom";
import "./DraftBox.css";

export interface DraftBoxProps {
    title:string,
    draftId:string,
    markdown:string,
    count:number,
    deleteDraft:any
}

export default class DraftBox extends React.Component<any, any> {

  public render() {
    return (
      <div className="DraftBox">
        <h3>
            <Link to={{
                pathname:`/editor/${this.props.draftId}`,
                state:{
                    draftId:this.props.draftId
                }
            }}>
                {this.props.title}
            </Link>
            <span onClick={this.props.deleteDraft}>删除</span>
        </h3>
        <article>
            <p>
                <span>{this.props.count}字</span>
            </p>
        </article>
      </div>
    );
  }
}
