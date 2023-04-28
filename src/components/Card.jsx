import styled from 'styled-components';

const Wrapper = styled.article`
	border-radius: var(--radii);
	background-color: var(--colors-ui-base);
	bow-shadow: var(--shadow);
	overflow: hidden;
	cursor: pointer;
`;

const CardBody = styled.div`
	padding: 1rem 1.5rem;
`;

const CardList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0.5rem 0 0;
`;

const CardNumber = styled.span`
	color: #bebebe;
`;

const CardListItem = styled.li`
	font-size: var(--fs-sm);
	line-height: 1.5;
	font-weight: var(--fw-light);

	& > b {
		font-size: var(--fs-md);
		display: block;
		font-weight: var(--fw-bold);
	}
`;

export const Card = ({ id, info = [], onClick }) => {
	return (
		<Wrapper onClick={onClick}>
			<CardBody>
				<CardNumber>#{id}</CardNumber>
				<CardList>
					{info.map((el) => (
						<CardListItem key={el.title}>
							<b>{el.title}</b> {el.description}
						</CardListItem>
					))}
				</CardList>
			</CardBody>
		</Wrapper>
	);
};
