import styled from 'styled-components';

interface ILegendProps {
	color: string;

}

export const Container = styled.div`
	width: 48%;
	height: 260px;

	background-color: ${props => props.theme.colors.tertiary};
	color: ${props => props.theme.colors.white};
	border-radius: 8px;

	margin: 10px 0;
	
	display: flex;
`;

export const GraphInfo = styled.aside`
	padding: 30px 20px;

	> h2 {
		margin-bottom: 20px;
	}
`;

export const LegendContainer = styled.ul`
	list-style: none;
	
	max-height: 170px;
	
`;

export const Legend = styled.li<ILegendProps>`
	display: flex;
	align-items: center;

	margin-bottom: 7px;
	
	> div {
		background-color: ${props => props.color};
		
		width: 40px;
		height: 40px;
		
		border-radius: 5px;
		
		font-size: 18px;
		line-height: 40px;
		text-align: center;

		margin-right: 10px;
	}
`;

export const Graph = styled.main`
	display: flex;
	flex: 1;
	justify-content: center;
`;
