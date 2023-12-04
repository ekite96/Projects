export default {
    get: (url) => {
      return fetch(url, {
        headers: {
        }
      }).then(res => {
        return res.json();
      });
    },
  
    post: (url, data) => {
      return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => {
        return res.json();
      });
    },
}