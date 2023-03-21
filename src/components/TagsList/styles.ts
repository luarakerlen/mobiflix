import styled from 'styled-components/native';

export const Container = styled.View`
	padding: 0 32px 16px;
	border-bottom-color: ${(props) => props.theme.colors['gray-300']};
	border-bottom-width: 1px;
`;

export const TagsListScroll = styled.ScrollView`
	overflow: visible;
`;

export const TagContent = styled.View`
	margin-right: 16px;
`;
