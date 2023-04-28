import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchPost } from '../config';

const UserName = styled.h3``;

const List = styled.ul``;

const ListItem = styled.li``;

export const User = () => {
	const { id } = useParams();
	const [post, setPost] = useState([]);

	useEffect(() => {
		axios.get(searchPost(id)).then(({ data }) => setPost(data));
	}, [id]);

	console.log(post.userId);

	return (
		<>
			<UserName>User</UserName>
			<List>
				<ListItem>
					<b>Name:</b>
				</ListItem>
				<ListItem>
					<b>E-mail:</b>
				</ListItem>
			</List>
		</>
	);
};
