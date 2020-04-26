import React from 'react';
import * as s from './style';

class ListItem extends React.Component {
  render() {
    const { name, id, version, deleteItem } = this.props;
    return (
      <tr key={id} className={s.listItemRoot}>
        <td>{name}</td>
        <td>{version}</td>
        <td><button onClick={() => deleteItem(id)}>Delete</button></td>
      </tr>
    )
  }
}

export default ListItem;