const BASE_URL = 'https://my-json-server.typicode.com/ouroboroser/testing-api';

const GET_USERS = '/users';
const CREATE_USER = '/users';
const GET_ONE_USER = '/users/1';
const GET_BOOKS = '/books';
const GET_AVAILABILITY_BOOKS = '/books';
const UPDATE_AVAILABILITY_BOOK = '/books/1';
const GET_ORDERS = '/orders';

const USER = {
  email: 'john@gmail.com',
  username: 'john',
};

const BOOK = {
  id: 1,
  title: 'Da Vinci Code,The',
  availability: false,
};

module.exports = {
  BASE_URL,
  GET_USERS,
  CREATE_USER,
  GET_ONE_USER,
  USER,
  GET_BOOKS,
  GET_AVAILABILITY_BOOKS,
  UPDATE_AVAILABILITY_BOOK,
  BOOK,
  GET_ORDERS
};
