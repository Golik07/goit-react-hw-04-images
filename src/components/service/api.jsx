import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38724681-aa89fd36fe8a2bf001dfd83f3';

 export const api = async (value, page) => {

    const response = await axios(`https://pixabay.com/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return response.data;

 }




