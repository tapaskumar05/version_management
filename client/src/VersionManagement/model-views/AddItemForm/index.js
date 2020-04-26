import React from 'react';
import { observer } from 'mobx-react';
import * as s from './style';

@observer
class AddItemForm extends React.Component {
  render() {
    const { addItem, onFormChange, name, version, error } = this.props.model.store.formStore;
    return(
      <form onSubmit={addItem} className={s.formRoot}>
        <div className="heading">Add Version</div>
        <input type="text" placeholder="Name" value={name} onChange={e => onFormChange(e.target.value, 'name')} className={error ? 'error' : ''} />
        {error ? <div className="error-label">{error}</div> : null}
        <input type="text" placeholder="Version" value={version} onChange={e => onFormChange(e.target.value, 'version')} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default AddItemForm;