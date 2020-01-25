const API_URL = process.env.REACT_APP_API_URL;

const environment = {
  API_URL: API_URL || 'https://localhost:5001'
};

console.log(environment);

export default environment;
