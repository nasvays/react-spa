import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { ALL_POSTS } from '../config';

export const HomePage = ({ posts, setPosts }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!posts.length)
			axios.get(ALL_POSTS).then(({ data }) => setPosts(data));
	}, []);

	return (
		<>
			<List>
				{posts.map((p) => {
					const postInfo = {
						userId: p.userId,
						id: p.id,
						info: [
							{
								title: p.title,
								description: p.body,
							},
						],
					};

					return (
						<Card
							key={p.id}
							onClick={() => navigate(`/posts/${p.id}`)}
							{...postInfo}
						/>
					);
				})}
			</List>
		</>
	);
};
