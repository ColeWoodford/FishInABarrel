import React, { Component } from 'react';
import { TableEntry } from './adminStyledComponents/admin-sc';

class LakeTable extends Component {
  listLakes = () => {
    const { lakes } = this.props;
    return (
      <div>
        {lakes.map(lake => <TableEntry key={lake.id}>{lake.lake_name}</TableEntry>)}
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.listLakes()}
      </div>
    )
  }
}

export default LakeTable;
