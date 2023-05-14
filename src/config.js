import axios from 'axios';

export const getUser = async (id) => {
	const data = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);
	return data;
};

export const getPosts = async () => {
	const data = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
	return data;
};

export const getComments = async (id) => {
	const data = await axios.get(
		`https://jsonplaceholder.typicode.com/posts/${id}/comments`
	);
	return data;
};
