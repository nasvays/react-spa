import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';
import { Comments } from '../components/Comments';
import { searchComments } from '../config';
import { User } from '../components/User';

export const Details = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [comment, setComment] = useState([]);

	useEffect(() => {
		axios.get(searchComments(id)).then(({ data }) => setComment(data));
	}, [id]);

	return (
		<div>
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack /> Back
			</Button>
			<User />
			{comment.map((c) => {
				const comments = {
					name: c.name,
					email: c.email,
					body: c.body,
				};

				return <Comments key={c.id} {...comments} />;
			})}
		</div>
	);
};
