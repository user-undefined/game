import axios from 'axios';

const X_API_KEY = 'M4wseIlTzB2QG7S5BEsfw363H8kQKKe85O8z8O3r';

export default axios.create({
  baseURL: 'https://e7h7qn8kya.execute-api.eu-west-1.amazonaws.com/release/',
  headers: { 'x-api-key': X_API_KEY }
})