import axios from 'axios';

export default function axiosWithAuth () {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://backend-onelineaday.herokuapp.com',
    headers: {
      Authorization: token
    }
  });
};