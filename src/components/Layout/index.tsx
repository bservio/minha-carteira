import React from 'react';

import { Container } from './styles'

import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';

interface ChildrenProps {
	children: React.ReactNode;
}

const Layout: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<Container>
			<MainHeader />
			<Aside />
			<Content>
				{children}
			</Content>
		</Container>
	)
}

export default Layout;