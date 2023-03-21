import styled from 'styled-components/native';

export const AddButtonContainer = styled.TouchableOpacity`
	width: 64px;
	height: 64px;
  align-items: center;
  justify-content: center;
	border-radius: 50%;
	background-color: ${props => props.theme.colors['blue-500']};
`;
