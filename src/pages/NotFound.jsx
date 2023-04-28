import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { IoArrowBack } from 'react-icons/io5';
import styled from 'styled-components';

const Error = styled.div`
	padding: 1rem 0;
`;

export const NotFound = () => {
	const navigate = useNavigate();
	return (
		<>
			<Error>This page doesn't exist</Error>
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack /> Back
			</Button>
		</>
	);
};
