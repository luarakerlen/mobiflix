import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

interface TagContainerProps {
	color: keyof typeof theme.colors;
}

export const TagContainer = styled.View<TagContainerProps>`
	border-radius: 12px;
	background-color: ${(props) => props.theme.colors[props.color]};
`;

export const TagText = styled.Text`
	padding: 8px 16px;
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts.roboto};
`;
