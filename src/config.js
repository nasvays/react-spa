const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const ALL_POSTS = BASE_URL + '/posts';

export const ALL_USERS = BASE_URL + '/users';

export const searchComments = (id) => ALL_POSTS + '/' + id + '/comments';

export const searchUsers = (id) => ALL_USERS + '/' + id;

export const searchPost = (id) => ALL_POSTS + '/' + id;
