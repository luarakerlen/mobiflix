import React from 'react';
import { tags } from '../../data/tags';
import { Tag } from '../Tag';
import { Container, TagContent, TagsListScroll } from './styles';

export function TagsList() {
	return (
		<Container>
			<TagsListScroll horizontal={true} showsHorizontalScrollIndicator={false}>
				{tags.map((tag) => {
					return (
						<TagContent key={tag.name}>
							<Tag key={tag.name} tag={tag} />
						</TagContent>
					);
				})}
			</TagsListScroll>
		</Container>
	);
}
