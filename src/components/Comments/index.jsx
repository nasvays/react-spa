import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Comment } from './components/Comment';
import { getComments } from '../../config';

export const Comments = () => {
	const { id } = useParams();

	const [comments, setComment] = useState(null);

	useEffect(() => {
		//axios.get(searchComments(id)).then(({ data }) => setComment(data));
		init();
	}, [id]);

	const init = async () => {
		const data = await getComments(id);
		setComment(data.data);
	};

	console.log(comments);

	if (comments == null) {
		return <div>Комментарии загружаются...</div>;
	}
	return (
		<div>
			{comments.map((c) => {
				const comments = {
					name: c.name,
					email: c.email,
					body: c.body,
				};

				return <Comment key={c.id} {...comments} />;
			})}
		</div>
	);
};
