import React, { useState } from 'react';
import { AddButton } from '../../components/AddButton';
import { MainVideo } from '../../components/MainVideo';
import { TagsList } from '../../components/TagsList';
import { VideosList } from '../../components/VideosList';
import { VideoInterface } from '../../interfaces/video';
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

	const [mainVideo, setMainVideo] = useState<VideoInterface>(videoTeste);

	function setMainVideoFunction(video: VideoInterface) {
		setMainVideo(video);
	}

	return (
		<HomeContainer>
			<Header>
				<Title>MOBIFLIX</Title>
			</Header>
			<Content>
				<MainVideo video={mainVideo} />
				<TagsList />
				<VideosList setMainVideo={setMainVideoFunction} />
			</Content>
			<AddButtonContainer>
				<AddButton />
			</AddButtonContainer>
		</HomeContainer>
	);
}
