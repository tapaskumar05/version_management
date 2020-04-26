import axios from 'axios';

const addItem = async ({ name, version }) => {
  return axios.post(`api/items/`, { name, version })
  .then(res => {
    return res.data;
  })
}

export default addItem;