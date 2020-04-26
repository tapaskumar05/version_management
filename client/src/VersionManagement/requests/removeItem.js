import axios from 'axios';

const removeItem = async (id) => {
  return axios.delete(`api/items/${id}`)
  .then(res => {
    return res.data;
  })
}

export default removeItem;