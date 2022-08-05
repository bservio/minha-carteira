import React from 'react';

import { Container } from './styles';

import SelectInput from '../../components/SelectInput';
import ContentHeader from '../../components/ContentHeader';

const Dashboard: React.FC = () => {
	const names = [
		{ value: "Bruno", label: "Bruno" },
		{ value: "Ana", label: "Ana" },
		{ value: "José", label: "José" }
	]

	const places = [
		{ value: "Batalha", label: "Batalha" },
		{ value: "Teresina", label: "Teresina" },
		{ value: "Parnaíba", label: "Parnaíba" },
	]

	return (
		<Container>
			<ContentHeader title="Dashboard" lineColor="#E44C4E">
				<SelectInput options={names} />
				<SelectInput options={places} />
			</ContentHeader>
		</Container>
	)
}

export default Dashboard;