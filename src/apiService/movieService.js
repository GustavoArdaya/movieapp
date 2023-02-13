import axios from 'axios';
const apiBase = 'https://63d9187974f386d4efe47837.mockapi.io/movies';

const movieService = {
  getAll() {
    return fetch(apiBase)
      .then((res) => res.json())
      .then((data) => data);
  },

  getById(id) {
    return axios.get(apiBase + `/${id}`).then((res) => res.data);
  },

  deleteById(id) {
    return axios.delete(apiBase + `/${id}`).then((res) => res.data);
  },

  create(data) {
    return axios
      .post(apiBase, data)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  },

  toggleFavorite(id, data) {
    return axios.put(apiBase + `/${id}`, data);
  },
};
export default movieService;
