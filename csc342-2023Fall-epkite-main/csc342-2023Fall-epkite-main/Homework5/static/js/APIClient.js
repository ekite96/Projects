import HTTPClient from "./HTTPClient.js";


  export default {
    getCurrentUser: () => {
        return HTTPClient.get('/api/user');
    },
    
    login: (username, password) => {
      let data = {
        username: username,
        password: password
      }
        return HTTPClient.post(`/api/login`, data);
    },

    logout: () => {
        return HTTPClient.post('api/logout', {});
    },

  };