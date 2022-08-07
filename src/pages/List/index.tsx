import React from 'react';
import { Container, Content, Filters } from './styles';

import SelectInput from '../../components/SelectInput';
import FinanceCard from '../../components/FinanceCard';
import ContentHeader from '../../components/ContentHeader';

const List: React.FC = () => {
	const months = [
		{ value: 8, label: "Agosto" },
		{ value: 9, label: "Setembro" },
		{ value: 10, label: "Outubro" }
	]

	const years = [
		{ value: 2023, label: "2023" },
		{ value: 2024, label: "2024" },
		{ value: 2025, label: "2025" },
	]

	return (
		<Container>
			<ContentHeader title="Saídas" lineColor="#E44C4E">
				<SelectInput options={months} />
				<SelectInput options={years} />
			</ContentHeader>

			<Filters>
				<button
					type="button"
					className='tag-filter tag-filter-recurrent'
				>
					Recorrentes
				</button>
				<button
					type="button"
					className='tag-filter tag-filter-eventual'
				>
					Eventuais
				</button>
			</Filters>

			<Content>
				<FinanceCard
					tagColor='#E44C4E'
					title='Conta de Luz'
					subtitle='27/08/2022'
					amount='R$ 320,00'
				/>
			</Content>
		</Container>
	)
}

export default List;