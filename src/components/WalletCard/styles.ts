import styled from "styled-components";

interface IContainterProps {
	color: string;
}

export const Container = styled.div<IContainterProps>`
	width: 32%;
	height: 150px;

	margin: 10px 0;
	
	background-color: ${props => props.color};
	color: ${props => props.theme.colors.white};

	border-radius: 8px;
	padding: 10px 20px;

	position: relative;
	overflow: hidden;

	> img {
		position: absolute;
		top: -10px;
		right: -20px;

		height: 110%;

		opacity: 30%;
	}

	> span {
		font-size: 18px;
		font-weight: 500;
	}

	> small {
		font-size: 12px;
		position: absolute;
		bottom: 10px;
	}

`;