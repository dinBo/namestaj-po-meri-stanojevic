import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://namestaj-po-meri-project.firebaseio.com/'
    }
);

export default instance;