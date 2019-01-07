import * as React from 'react';
import TopBar from '../TopBar/TopBar';


export default class DraftList extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <TopBar ShowReleaseBtn={false}/>
          DraftList
      </div>
    );
  }
}
