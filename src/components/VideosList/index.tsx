import React from 'react';
import { View, Image } from 'react-native';
import { tags } from '../../data/tags';
import { VideoInterface } from '../../interfaces/video';
import { Tag, TagProps } from '../Tag';
import { Container, TagContent, TagsList, VideoContent } from './styles';

interface Props {
	setMainVideo: (video: VideoInterface) => void
}

export function VideosList({setMainVideo}: Props) {
	const videos: VideoInterface[] = [
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
		<Container showsVerticalScrollIndicator={false}>
			{videos.map((video) => {
				return (
					<View key={video.src}>
						<TagsList horizontal={true} showsHorizontalScrollIndicator={false}>
							{video.tags.map((videoTag) => {
								const tag =
									tags.find((tag) => tag.name === videoTag) || defaultTag;
								return (
									<TagContent key={tag.name}>
										<Tag key={tag.name} tag={tag} />
									</TagContent>
								);
							})}
						</TagsList>
						<VideoContent onPress={() => setMainVideo(video)}>
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
		</Container>
	);
}
