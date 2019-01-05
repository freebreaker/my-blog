import * as React from 'react';

export interface DraftBoxProps {
    title:string
}

export default class DraftBox extends React.Component<DraftBoxProps, any> {
  public render() {
    return (
      <div>
        DraftBox
      </div>
    );
  }
}
