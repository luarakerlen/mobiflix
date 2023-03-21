import styled from "styled-components/native";

export const Container = styled.View`
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