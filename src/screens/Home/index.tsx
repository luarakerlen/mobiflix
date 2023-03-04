import React from 'react';
import { Image, View } from 'react-native';
import { Tag, TagProps } from '../../components/Tag';
import {
	BannerContainer,
	ButtonText,
	Content,
	Header,
	HomeContainer,
	TagContent,
	TagsContainer,
	TagsList,
	Title,
	VideoContent,
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

	const videos = [
		{
			src: 'https://www.youtube.com/watch?v=mDtif_o7DiQ',
			thumbnailSrc: 'https://img.youtube.com/vi/mDtif_o7DiQ/hqdefault.jpg',
			tags: ['Gameplay', 'Regras'],
		},
		{
			src: 'https://www.youtube.com/watch?v=EDeN7w31_a8',
			thumbnailSrc: 'https://img.youtube.com/vi/EDeN7w31_a8/hqdefault.jpg',
			tags: ['Regras', 'Jogo rápido'],
		},
		{
			src: 'https://www.youtube.com/watch?v=z9_B9KjavPo',
			thumbnailSrc: 'https://img.youtube.com/vi/z9_B9KjavPo/hqdefault.jpg',
			tags: ['Unboxing'],
		},
	];

	const defaultTag: TagProps = { name: '', color: 'gray-500' };

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
				<TagsContainer>
					<TagsList horizontal={true} showsHorizontalScrollIndicator={false}>
						{tags.map((tag) => {
							return (
								<TagContent>
									<Tag key={tag.name} tag={tag} />
								</TagContent>
							);
						})}
					</TagsList>
				</TagsContainer>
				<VideosList showsVerticalScrollIndicator={false}>
					{videos.map((video) => {
						return (
							<View>
								<TagsList
									horizontal={true}
									showsHorizontalScrollIndicator={false}
								>
									{video.tags.map((videoTag) => {
										const tag =
											tags.find((tag) => tag.name === videoTag) || defaultTag;
										return (
											<TagContent>
												<Tag key={tag.name} tag={tag} />
											</TagContent>
										);
									})}
								</TagsList>
								<VideoContent>
									<Image
										style={{ width: '100%', height: '100%' }}
										source={{
											uri: video.thumbnailSrc,
										}}
									/>
								</VideoContent>
							</View>
						);
					})}
				</VideosList>
			</Content>
		</HomeContainer>
	);
}
