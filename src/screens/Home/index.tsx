import React from 'react';
import { Button, Image, Text } from 'react-native';
import { Tag, TagProps } from '../../components/Tag';
import theme from '../../global/styles/theme';
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
	const tags: TagProps[] = [
		{ name: 'Gameplay', color: 'blue-500' },
		{ name: 'Regras', color: 'red' },
		{ name: 'Unboxing', color: 'black' },
		{ name: 'Jogo rápido', color: 'green' },
		{ name: 'Jogo solo', color: 'purple-500' },
	];

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
				<TagsList>
					{tags.map((tag) => {
						return <Tag key={tag.name} tag={tag} />;
					})}
				</TagsList>
				<VideosList></VideosList>
			</Content>
		</HomeContainer>
	);
}
