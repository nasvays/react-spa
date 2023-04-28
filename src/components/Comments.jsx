import styled from 'styled-components';

const Wrapper = styled.section`
	margin: 1rem 0 0 0;
`;

const CommentsGroup = styled.div`
	padding: 1rem 1.5rem;
	background-color: var(--colors-ui-base);
`;

const CommentsTitle = styled.h3`
	margin: 0.5rem 0 0 0;
	font-weight: var(--fw-bold);
`;

const CommentsEmail = styled.div`
	color: #bebebe;
`;

const CommentsBody = styled.div``;

export const Comments = (props) => {
	const { name, email, body } = props;
	return (
		<div>
			<Wrapper>
				<CommentsGroup>
					<CommentsEmail>{email}</CommentsEmail>
					<CommentsTitle>{name}</CommentsTitle>
					<CommentsBody>{body}</CommentsBody>
				</CommentsGroup>
			</Wrapper>
		</div>
	);
};
