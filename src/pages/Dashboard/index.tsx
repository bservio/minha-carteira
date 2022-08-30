import React, { useState, useMemo } from 'react';

import SelectInput from '../../components/SelectInput';
import ContentHeader from '../../components/ContentHeader';
import WalletCard from '../../components/WalletCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
	const [monthSelected, setMonthSelected] = useState<string>('1');
	const [yearSelected, setYearSelected] = useState<string>('2020');


	const months = [
		{ value: 1, label: "Janeiro" },
		{ value: 2, label: "Fevereiro" },
		{ value: 3, label: "Março" },
		{ value: 4, label: "Abril" },
		{ value: 5, label: "Maio" },
		{ value: 6, label: "Junho" },
		{ value: 7, label: "Julho" },
		{ value: 8, label: "Agosto" },
		{ value: 9, label: "Setembro" },
		{ value: 10, label: "Outubro" }
	];

	const years = useMemo(() => {
		let uniqueYears: number[] = [];

		[...expenses, ...gains].forEach(item => {
			const date = new Date(item.date);
			const year = date.getFullYear();

			if (!uniqueYears.includes(year)) {
				uniqueYears.push(year);
			}
		});

		return uniqueYears.map(year => {
			return {
				value: year,
				label: year
			};
		});
	}, []);


	return (
		<Container>
			<ContentHeader title="Dashboard" lineColor="#F7931B">
				<SelectInput
					options={months}
					onChange={e => setMonthSelected(e.target.value)}
				/>
				<SelectInput
					options={years}
					onChange={e => setYearSelected(e.target.value)}
				/>
			</ContentHeader>
			<Content>
				<WalletCard
					title="saldo"
					amount={150.00}
					footerInfo="atualizado com base nas entradas e saídas"
					icon="dolar"
					color="#4E41f0"
				/>
				<WalletCard
					title="entradas"
					amount={5000.00}
					footerInfo="atualizado com base nas entradas e saídas"
					icon="arrowUp"
					color="#F7931B"
				/>
				<WalletCard
					title="saídas"
					amount={4850.00}
					footerInfo="atualizado com base nas entradas e saídas"
					icon="arrowDown"
					color="#E44C4E"
				/>
			</Content>
		</Container>
	)
}

export default Dashboard;