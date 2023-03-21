import React from 'react';
import { Image, Linking } from 'react-native';
import { VideoInterface } from '../../interfaces/video';
import { ButtonText, Container, WatchButton } from './styles';

interface Props {
	video: VideoInterface;
}

export function MainVideo({ video }: Props) {
	function playVideoOnYouTube() {
		Linking.openURL(video.src).catch((error) =>
			console.error('Ocorreu um erro', error)
		);
	}

	return (
		<Container>
			<Image
				style={{ width: '100%', height: '100%' }}
				source={{
					uri: video.thumbnailSrc,
				}}
			/>
			<WatchButton onPress={playVideoOnYouTube}>
				<ButtonText>Assista agora</ButtonText>
			</WatchButton>
		</Container>
	);
}
