import * as React from 'react';
import TopBar from '../TopBar/TopBar';
import {connect} from 'react-redux';
import {getDraftList,deleteDraft} from 'src/actions/draft'
import DraftBox from './DraftBox';
import './DraftList.css';


interface DraftListProps {
  draft:{
    draftList:object[]
  },
  getDraftList:()=>void,
  deleteDraft:(draftId:string)=>void
}

class DraftList extends React.Component<DraftListProps, any> {

  public componentDidMount(){
    this.props.getDraftList()
  }

  public count =(str:string)=>{

    let strLen = 0;
   
	  try{
      // 先将回车换行符做特殊处理
      str = str.replace(/(\r\n+|\s+|　+)/g,"龘");
      // 处理英文字符数字，连续字母、数字、英文符号视为一个单词
      str = str.replace(/[\x00-\xff]/g,"m");	
      // 合并字符m，连续字母、数字、英文符号视为一个单词
      str = str.replace(/m+/g,"*");
        // 去掉回车换行符
      str = str.replace(/龘+/g,"");
      // 返回字数
      strLen = str.length;
    }catch(e){
      console.log(e)
    }
    console.log(strLen)
    return strLen;
  }

  public render() {
    console.log(this.props.draft.draftList)
    const draftList = this.props.draft.draftList.map((item:any,index:number)=>{
      return (
        <div key={index}>
          <DraftBox title={item.title} draftId={item.id} markdown={item.markdown}
          count={this.count(item.markdown)}
          deleteDraft={this.props.deleteDraft(item.id)}
          />
        </div>
      )
  })


    return (
      <div>
        <TopBar ShowReleaseBtn={false}/>
        <div className="DraftList">
            {draftList}
        </div>
          
      </div>
    );
  }
}


const mapStateToProps = (state: {}, ownProps: any) => {
  return state
};

const mapDispatchToProps = {getDraftList,deleteDraft};

export default connect(mapStateToProps, mapDispatchToProps)(DraftList);