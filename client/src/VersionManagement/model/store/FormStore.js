import { observable, action } from 'mobx';
import addItem from '../../requests/addItem';

class FormStore {
  @observable name = '';
  @observable version = '';
  @observable error = '';

  constructor(store) {
    this.store = store;
  }

  @action
  setInitialVal = () => {
    this.name = '';
    this.version = '';
    this.error = ''
  }

  validateForm = () => {
    if (!this.name) {
      return 'Name cant be empty!!'
    }
    return false;
  }

  @action
  onFormChange = (val, item) => {
    this[item] = val;
    this.error = '';
  }

  @action
  addItem = async (event) => {
    event.preventDefault();
    const error = this.validateForm();
    if(!error) {
      const newItem = await addItem({
        name: this.name,
        version: this.version
      });
      if (newItem && newItem.name) {
        this.store.list.push(newItem);
        this.setInitialVal();
      }
    } else {
      this.error = error;
    }
  }
}

export default FormStore;