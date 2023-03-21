import React from 'react';
import { Image } from 'react-native';
import { AddButton } from '../../components/AddButton';
import { TagsList } from '../../components/TagsList';
import { VideosList } from '../../components/VideosList';
import {
	AddButtonContainer,
	BannerContainer,
	ButtonText,
	Content,
	Header,
	HomeContainer,
	Title,
	WatchButton,
} from './styles';

export function Home() {
	return (
		<HomeContainer>
			<Header>
				<Title>MOBIFLIX</Title>
			</Header>
			<Content>
				<BannerContainer>
					<Image
						style={{ width: '100%', height: '100%' }}
						source={{
							uri: 'https://img.youtube.com/vi/EDeN7w31_a8/hqdefault.jpg',
						}}
					/>
					<WatchButton onPress={() => {}}>
						<ButtonText>Assista agora</ButtonText>
					</WatchButton>
				</BannerContainer>
				<TagsList />
				<VideosList />
			</Content>
			<AddButtonContainer>
				<AddButton />
			</AddButtonContainer>
		</HomeContainer>
	);
}
