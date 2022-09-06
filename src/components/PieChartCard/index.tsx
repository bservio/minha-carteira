import React from 'react';

import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer
} from 'recharts'

import {
	Container,
	GraphInfo,
	LegendContainer,
	Legend,
	Graph
} from './styles';

interface IPieChartCardProps {
	data: {
		name: string;
		value: number;
		percent: number;
		color: string;
	}[];
}

const PieChartCard: React.FC<IPieChartCardProps> = ({ data }) => (
	<Container>
		<GraphInfo>
			<h2>Relação</h2>
			<LegendContainer>
				{
					data.map((item, index) => (
						<Legend key={index} color={item.color}>
							<div>{item.percent}</div>
							<span>{item.name}</span>
						</Legend>
					))
				}
			</LegendContainer>
		</GraphInfo>

		<Graph>
			<ResponsiveContainer>
				<PieChart>
					<Pie data={data} dataKey="percent">
						{
							data.map((item, index) => (
								<Cell key={index} fill={item.color} />
							))
						}
					</Pie>
				</PieChart>
			</ResponsiveContainer>

		</Graph>
	</Container>
);

export default PieChartCard;