import React from 'react';
import { Image } from 'react-native';
import { ButtonText, Container, WatchButton } from './styles';

export function MainVideo() {
	return (
		<Container>
			<Image
				style={{ width: '100%', height: '100%' }}
				source={{
					uri: 'https://img.youtube.com/vi/EDeN7w31_a8/hqdefault.jpg',
				}}
			/>
			<WatchButton onPress={() => {}}>
				<ButtonText>Assista agora</ButtonText>
			</WatchButton>
		</Container>
	);
}
