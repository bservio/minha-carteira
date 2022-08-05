import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import List from './pages/List';
import Dashboard from './pages/Dashboard';

import dark from './styles/themes/dark';

const App: React.FC = () => {
	return (
		<ThemeProvider theme={dark}>
			<GlobalStyles />
			<Layout>
				<List />
			</Layout>
		</ThemeProvider>

	)
};

export default App;