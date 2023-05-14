import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../config';

const UserName = styled.h3``;

const List = styled.ul``;

const ListItem = styled.li``;

export const User = () => {
	const [user, setUser] = useState(null);

	const { userid } = useParams();

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		const data = await getUser(userid);
		setUser(data);
	};

	if (user == null) {
		return (
			<div style={{ marginTop: '1rem' }}>
				Загружаются данные о пользователе...
			</div>
		);
	}

	return (
		<>
			<UserName>User</UserName>
			<List>
				<ListItem>
					<b>Name:{user.data.name}</b>
				</ListItem>
				<ListItem>
					<b>E-mail:{user.data.email}</b>
				</ListItem>
			</List>
		</>
	);
};
