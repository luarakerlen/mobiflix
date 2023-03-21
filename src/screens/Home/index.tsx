import React from 'react';
import { AddButton } from '../../components/AddButton';
import { MainVideo } from '../../components/MainVideo';
import { TagsList } from '../../components/TagsList';
import { VideosList } from '../../components/VideosList';
import {
	AddButtonContainer,
	Content,
	Header,
	HomeContainer,
	Title,
} from './styles';

export function Home() {
	const videoTeste = {
		src: 'https://www.youtube.com/watch?v=mDtif_o7DiQ',
		thumbnailSrc: 'https://img.youtube.com/vi/mDtif_o7DiQ/hqdefault.jpg',
		tags: ['Gameplay', 'Regras'],
	};

	return (
		<HomeContainer>
			<Header>
				<Title>MOBIFLIX</Title>
			</Header>
			<Content>
				<MainVideo video={videoTeste} />
				<TagsList />
				<VideosList />
			</Content>
			<AddButtonContainer>
				<AddButton />
			</AddButtonContainer>
		</HomeContainer>
	);
}
