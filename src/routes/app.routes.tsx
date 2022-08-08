import React from 'react';

import { Routes, Route } from 'react-router-dom'

import List from '../pages/List';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';

const AppRoutes: React.FC = () => (
	<Layout>
		<Routes>
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/list/:type" element={<List />} />
		</Routes>
	</Layout>
);

export default AppRoutes;