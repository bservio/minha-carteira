import React, { useState, useMemo } from 'react';

import WalletCard from '../../components/WalletCard';
import MessageBox from '../../components/MessageBox';
import SelectInput from '../../components/SelectInput';
import PieChartCard from '../../components/PieChartCard';
import ContentHeader from '../../components/ContentHeader';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import grinningImg from "../../assets/grinning.svg";
import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";

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

	const calcExpenses = useMemo(() => {
		let sum: number = 0;

		expenses.forEach(item => {
			const date = new Date(item.date);
			const year = String(date.getFullYear());
			const month = String(date.getMonth() + 1);

			if (year === yearSelected && month === monthSelected) {
				try {
					sum += Number(item.amount);
				} catch (e) {
					throw new Error("Invalid amount in the expenses calculation")
				}
			};
		});
		return sum;
	}, [yearSelected, monthSelected])


	const calcGains = useMemo(() => {
		let sum: number = 0;

		gains.forEach(item => {
			const date = new Date(item.date);
			const year = String(date.getFullYear());
			const month = String(date.getMonth() + 1);

			if (year === yearSelected && month === monthSelected) {
				try {
					sum += Number(item.amount);
				} catch (e) {
					throw new Error("Invalid amount in the gains calculation")
				}
			};
		});
		return sum;
	}, [yearSelected, monthSelected])


	const calcTotal = useMemo(() => {
		return calcGains - calcExpenses;
	}, [calcGains, calcExpenses])

	const balanceMessage = useMemo(() => {
		if (calcTotal < 0) {
			return {
				title: "Que triste!",
				description: "Nesse mês você gastou mais do que deveria!",
				footerText: "Experimente cortar gastos desnecessários para diminuir suas despesas!",
				icon: sadImg
			}
		} else if (calcTotal === 0) {
			return {
				title: "Ufaa!",
				description: "Sua carteira está zerada!",
				footerText: "Tenha cuidado. No próximo mês tente poupar seu dinheiro.",
				icon: grinningImg
			}
		} else {
			return {
				title: "Muito bem!",
				description: "Sua carteira está positiva!",
				footerText: "Continue assim. Considere investir seu saldo.",
				icon: happyImg
			}
		}
	}, [calcTotal]);

	const relationExpensesVersusGains = useMemo(() => {
		const total = calcGains + calcExpenses;

		const gainsPercent = Number(((calcGains / total) * 100).toFixed(1));
		const expensesPercent = Number(((calcExpenses / total) * 100).toFixed(1));

		const data = [
			{
				name: "Entradas",
				value: calcGains,
				percent: gainsPercent,
				color: '#F7931B'
			},
			{
				name: "Saídas",
				value: calcExpenses,
				percent: expensesPercent,
				color: '#E44C4E'
			}
		];

		return data;

	}, [calcExpenses, calcGains]);

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
					amount={calcTotal}
					footerInfo="atualizado com base nas entradas e saídas"
					icon="dolar"
					color="#4E41f0"
				/>
				<WalletCard
					title="entradas"
					amount={calcGains}
					footerInfo="atualizado com base nas entradas e saídas"
					icon="arrowUp"
					color="#F7931B"
				/>
				<WalletCard
					title="saídas"
					amount={calcExpenses}
					footerInfo="atualizado com base nas entradas e saídas"
					icon="arrowDown"
					color="#E44C4E"
				/>

				<MessageBox
					title={balanceMessage.title}
					description={balanceMessage.description}
					footerText={balanceMessage.footerText}
					icon={balanceMessage.icon}
				/>

				<PieChartCard data={relationExpensesVersusGains} />
			</Content>
		</Container>
	)
}

export default Dashboard;