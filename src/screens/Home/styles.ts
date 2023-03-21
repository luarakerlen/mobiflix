import styled from 'styled-components/native';

export const HomeContainer = styled.View`
	flex: 1;
	align-items: center;
	background-color: ${(props) => props.theme.colors['gray-500']};
`;

export const Header = styled.View`
	width: 100%;
	height: 96px;
	align-items: center;
	justify-content: flex-end;
	background-color: ${(props) => props.theme.colors['gray-700']};
`;

export const Title = styled.Text`
	font-size: 32px;
	line-height: 38px;
	font-family: ${(props) => props.theme.fonts.bebas};
	color: ${(props) => props.theme.colors['blue-500']};
`;

export const Content = styled.View`
	flex: 1;
	width: 100%;
	padding: 8px 0 0;
`;

export const AddButtonContainer = styled.View`
	position: absolute;
	bottom: 48px;
	right: 16px;
`;
