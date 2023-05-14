import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { getPosts } from '../config';

export const HomePage = () => {
	const navigate = useNavigate();

	const [posts, setPosts] = useState(null);

	useEffect(() => {
		//axios.get(ALL_POSTS).then(({ data }) => setPosts(data)); - замена на человеческий get
		init();
	}, []);

	const init = async () => {
		const data = await getPosts();
		setPosts(data.data);
	};

	if (posts == null) {
		return <div>Данные загружаются...Пора сменить провайдера</div>;
	}

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
							onClick={() => navigate(`/user/${p.userId}/posts/${p.id}`)} //исправление рутинга к карточке
							{...postInfo}
						/>
					);
				})}
			</List>
		</>
	);
};
