import axios from 'axios';

const fetchItems = async () => {
  return axios.get(`api/items/`)
  .then(res => {
    return res.data;
  })
}

export default fetchItems;