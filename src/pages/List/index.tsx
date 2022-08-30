import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import date from 'date-and-time';
import { v4 as uuidv4 } from 'uuid';

import SelectInput from '../../components/SelectInput';
import FinanceCard from '../../components/FinanceCard';
import ContentHeader from '../../components/ContentHeader';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import formatCurrency from '../../utils/formatCurrency';

import { Container, Content, Filters } from './styles';


interface IData {
	id: string;
	description: string;
	amountFormated: string;
	frequency: string;
	dateFormated: string;
	tagColor: string;
}

const List: React.FC = () => {
	const [data, setData] = useState<IData[]>([]);
	const [monthSelected, setMonthSelected] = useState<string>('1');
	const [yearSelected, setYearSelected] = useState<string>('2020');
	const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);

	const { type } = useParams();

	const titleOptions = useMemo(() => {
		return type === 'entry-balance'
			? { title: 'Entradas', lineColor: '#4E41F0' }
			: { title: 'Saídas', lineColor: '#CC2A2C' };
	}, [type]);

	const listData = useMemo(() => {
		return type === 'entry-balance' ? gains : expenses;
	}, [type])

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

		listData.forEach(item => {
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
	}, [listData]);

	const handleFrequencyClick = (frequency: string) => {
		const alreadySelected = selectedFrequency.findIndex(item => item === frequency);

		if (alreadySelected >= 0) {
			const filtered = selectedFrequency.filter(item => item !== frequency);
			setSelectedFrequency(filtered);
		} else {
			setSelectedFrequency((prev) => [...prev, frequency]);
		};
	};


	useEffect(() => {

		const filteredData = listData.filter(item => {
			const date = new Date(item.date);
			const month = String(date.getMonth() + 1);
			const year = String(date.getFullYear());

			return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
		});

		const response = filteredData.map(item => {
			return {
				id: uuidv4(),
				description: item.description,
				amountFormated: formatCurrency(Number(item.amount)),
				frequency: item.frequency,
				dateFormated: date.transform(item.date, 'YYYY-MM-DD', 'DD/MM/YYYY'),
				tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
			}
		})
		setData(response);
	}, [monthSelected, yearSelected, listData, selectedFrequency]);

	return (
		<Container>
			<ContentHeader
				title={titleOptions.title}
				lineColor={titleOptions.lineColor}
			>
				<SelectInput
					options={months}
					onChange={e => setMonthSelected(e.target.value)}
				/>
				<SelectInput
					options={years}
					onChange={e => setYearSelected(e.target.value)}
				/>
			</ContentHeader>

			<Filters>
				<button
					type="button"
					className={`tag-filter tag-filter-recurrent
						${selectedFrequency.includes('recorrente') && 'tag-actived'}
					`}
					onClick={() => handleFrequencyClick('recorrente')}
				>
					Recorrentes
				</button>
				<button
					type="button"
					className={`tag-filter tag-filter-eventual
						${selectedFrequency.includes('eventual') && 'tag-actived'}
					`}
					onClick={() => handleFrequencyClick('eventual')}
				>
					Eventuais
				</button>
			</Filters>

			<Content>
				{
					data.map((item) => (
						<FinanceCard
							key={item.id}
							tagColor={item.tagColor}
							title={item.description}
							subtitle={item.dateFormated}
							amount={item.amountFormated}
						/>
					))
				}

			</Content>
		</Container>
	)
}

export default List;