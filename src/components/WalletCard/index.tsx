import React, { useMemo } from 'react';

import CountUp from 'react-countup';

import arrowDownImg from '../../assets/arrow-down.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import dolarImg from '../../assets/dolar.svg';

import { Container } from './styles'

interface IWalletCardProps {
	title: string;
	amount: number;
	footerInfo: string;
	icon: 'dolar' | 'arrowUp' | 'arrowDown';
	color: string;
}

const WalletCard: React.FC<IWalletCardProps> = ({
	title,
	amount,
	footerInfo,
	icon,
	color
}) => {

	const iconSelected = useMemo(() => {
		if (icon === 'dolar')
			return dolarImg;
		else if (icon === 'arrowUp')
			return arrowUpImg;
		else if (icon === 'arrowDown')
			return arrowDownImg;
	}, [icon])

	return (
		<Container color={color}>
			<span>{title}</span>
			<h1>
				<CountUp
					end={amount}
					prefix="R$ "
					separator='.'
					decimal=','
					decimals={2}
				/>
			</h1>
			<small>{footerInfo}</small>
			<img src={iconSelected} alt={title} />
		</Container>
	)
}

export default WalletCard;