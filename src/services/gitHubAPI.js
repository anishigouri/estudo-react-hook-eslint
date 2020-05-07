// YARN ADD REACT-REDUX
import axios from 'axios';

export default async function callApi(url) {
  const response = await axios.get('https://api.github.com/users/anishigouri');
  console.log('responseee', response);
  return response;
}
