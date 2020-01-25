const API_URL = process.env.REACT_APP_API_URL;

const environment = {
  API_URL: API_URL || 'https://api.cheeseybingo.co.uk'
};

console.log(environment);

export default environment;
