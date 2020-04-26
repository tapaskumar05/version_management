import { observable } from 'mobx';
import FormStore from './FormStore';

class RootStore {
  @observable list = [];
  @observable loading = false;
  constructor() {
    this.formStore = new FormStore(this);
  }
}

export default RootStore;