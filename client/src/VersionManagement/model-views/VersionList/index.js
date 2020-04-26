import React from 'react';
import { observer } from 'mobx-react';
import ListItem from '../../components/ListItem';
import * as s from './style';

@observer
class VersionList extends React.Component {
  render() {
    const { list } = this.props.model.store;
    const { deleteItem } = this.props.model.actions;
    if (!list) {
      return null;
    }
    return (
      <table className={s.versionListRoot}>
        <thead>
          <td>NAME</td>
          <td>VERISON</td>
          <td>ACTION</td>
        </thead>
        <tbody>
          {list.map(item => <ListItem name={item.name} id={item._id} key={item._id} version={item.version} deleteItem={deleteItem} />)}
        </tbody>
      </table>
    )
  }
}

export default VersionList;