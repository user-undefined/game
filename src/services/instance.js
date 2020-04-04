import axios from 'axios';

const X_API_KEY = 'M4wseIlTzB2QG7S5BEsfw363H8kQKKe85O8z8O3r';

export const API_URL = 'https://e7h7qn8kya.execute-api.eu-west-1.amazonaws.com/dev/';
export const NOTIFICATION_URL = 'wss://1g4wxaze71.execute-api.eu-west-1.amazonaws.com/dev';

export default axios.create({
  baseURL: API_URL,
  headers: { 'x-api-key': X_API_KEY }
})