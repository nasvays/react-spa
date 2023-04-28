import styled from 'styled-components';

const Wrapper = styled.section`
	width: 100%;

	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 1rem;

	@media (min-width: 767px) {
		gap: 2rem;
	}
	@media (min-width: 1024px) {
		gap: 2.5rem;
	}
`;

export const List = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};
