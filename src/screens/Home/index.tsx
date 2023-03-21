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
	return (
		<HomeContainer>
			<Header>
				<Title>MOBIFLIX</Title>
			</Header>
			<Content>
				<MainVideo />
				<TagsList />
				<VideosList />
			</Content>
			<AddButtonContainer>
				<AddButton />
			</AddButtonContainer>
		</HomeContainer>
	);
}
