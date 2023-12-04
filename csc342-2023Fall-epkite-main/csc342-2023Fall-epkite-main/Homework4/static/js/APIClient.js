import HTTPClient from "./HTTPClient.js";


  export default {
    getCurrentUser: () => {
        return HTTPClient.get('/api/user');
    },
  
    getUserByID: (id) => {
      return HTTPClient.get(`/api/user/${id}`);
    },

    getUserHowls: (id) => {
        return HTTPClient.get(`/api/user/${id}/howls`);
    },

    getFollowingHowls: (id) => {
        return HTTPClient.get(`/api/${id}/howls`);
    },
  
    newHowl: (text) => {
        let value = {
            text : text
        }
      return HTTPClient.post(`/api/user/new`, value);
    },

    login: (username) => {
        console.log(username + " in APIClient");
        let user = {
            username : username
        }
        return HTTPClient.post(`/api/login`, user);
      },

  };
  