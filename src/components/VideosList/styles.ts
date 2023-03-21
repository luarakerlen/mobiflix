import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	padding: 16px 32px 0;
	margin-bottom: 64px;
`;

export const TagsList = styled.ScrollView`
	overflow: visible;
`;

export const TagContent = styled.View`
	margin-right: 16px;
`;

export const VideoContent = styled.TouchableOpacity`
	height: 192px;
	width: 100%;
	margin-bottom: 24px;
	margin-top: 8px;
	padding: 0;
`;

export const AddButtonContainer = styled.View`
	position: absolute;
	bottom: 48px;
	right: 16px;
`;
