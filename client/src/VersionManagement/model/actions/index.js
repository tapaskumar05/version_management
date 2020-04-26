import { action } from 'mobx';
import fetchItems from '../../requests/fetchItems'
import removeItem from '../../requests/removeItem';

class Actions {
  constructor(store) {
    this.store = store;
  }

  @action
  fetchLists = async () => {
    this.store.loading = true;
    const list = await fetchItems();
    this.store.list = list;
    this.store.loading = false;
  }

  @action
  deleteItem = async (id) => {
    const removed = await removeItem(id);
    if (removed.success) {
      const removedIndex = this.store.list.findIndex(i => i._id === id);
      this.store.list.splice(removedIndex, 1);
    }
  }
}

export default Actions;