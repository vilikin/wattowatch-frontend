const isDev = location.href.includes('localhost');

export default {
  BASE_URL: isDev
    ? 'http://localhost:8080'
    : 'https://wattowatch-backend.herokuapp.com'
};
