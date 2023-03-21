import React from 'react';
import { Image } from 'react-native';
import { AddButton } from '../../components/AddButton';
import { Tag } from '../../components/Tag';
import { VideosList } from '../../components/VideosList';
import { tags } from '../../data/tags';
import {
	AddButtonContainer,
	BannerContainer,
	ButtonText,
	Content,
	Header,
	HomeContainer,
	TagContent,
	TagsContainer,
	TagsList,
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
				<TagsContainer>
					<TagsList horizontal={true} showsHorizontalScrollIndicator={false}>
						{tags.map((tag) => {
							return (
								<TagContent key={tag.name}>
									<Tag key={tag.name} tag={tag} />
								</TagContent>
							);
						})}
					</TagsList>
				</TagsContainer>
				<VideosList />
			</Content>
			<AddButtonContainer>
				<AddButton />
			</AddButtonContainer>
		</HomeContainer>
	);
}
