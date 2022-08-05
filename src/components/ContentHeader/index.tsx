import React from 'react';

import { Container, PageTitle, Controllers } from './styles'

interface IContentHeaderProps {
	title: string;
	lineColor: string;
	children: React.ReactNode
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
	title, lineColor, children
}) => {
	return (
		<Container>
			<PageTitle lineColor={lineColor}>
				<h1>{title}</h1>
			</PageTitle>

			<Controllers>
				{children}
			</Controllers>
		</Container>
	)
};

export default ContentHeader;