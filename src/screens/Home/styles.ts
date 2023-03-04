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

export const BannerContainer = styled.View`
	height: 192px;
	width: 100%;
	margin-bottom: 24px;
	padding: 0 32px;
`;

export const WatchButton = styled.TouchableOpacity`
	align-self: center;
	width: 50%;
	padding: 16px 8px;
	border-radius: 8px;
	background-color: ${(props) => props.theme.colors['blue-500']};

	position: absolute;
	bottom: 10px;
`;

export const ButtonText = styled.Text`
	font-size: 18px;
	line-height: 21px;
	text-align: center;
	font-family: ${(props) => props.theme.fonts.roboto};
	color: ${(props) => props.theme.colors.white};
`;

export const TagsContainer = styled.View`
	padding: 0 32px 16px;
	border-bottom-color: ${(props) => props.theme.colors['gray-300']};
	border-bottom-width: 1px;
`;

export const TagsList = styled.ScrollView`
	overflow: visible;
`;

export const TagContent = styled.View`
	margin-right: 16px;
`;

export const VideosList = styled.ScrollView`
	padding: 16px 32px 0;
	margin-bottom: 64px;
`;

export const VideoContent = styled(BannerContainer)`
	margin-top: 8px;
	padding: 0;
`;
