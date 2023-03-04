import React from 'react';
import { Text, View } from 'react-native';
import theme from '../../global/styles/theme';
import { TagContainer, TagText } from './styles';

export interface TagProps {
	name: string;
	color: keyof typeof theme.colors;
}

interface Props {
	tag: TagProps;
}

export function Tag({ tag }: Props) {
	return (
		<TagContainer color={tag.color}>
			<TagText>{tag.name}</TagText>
		</TagContainer>
	);
}
