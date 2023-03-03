import React from 'react';
import { Button, Image, Text } from 'react-native';
import {
	BannerContainer,
	ButtonText,
	Content,
	Header,
	HomeContainer,
	TagsList,
	Title,
	VideosList,
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
							uri: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
						}}
					/>
					<WatchButton onPress={() => {}}>
						<ButtonText>Assista agora</ButtonText>
					</WatchButton>
				</BannerContainer>
				<TagsList></TagsList>
				<VideosList></VideosList>
			</Content>
		</HomeContainer>
	);
}
