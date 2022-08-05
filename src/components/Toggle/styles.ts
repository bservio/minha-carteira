import styled from "styled-components";
import Switch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`;

export const ToggleLabel = styled.span`
	color: ${props => props.theme.colors.white};
`;

export const ToggleButton = styled(Switch).attrs<ReactSwitchProps>(
	({ theme }) => ({
		onColor: theme.colors.info,
		offColor: theme.colors.warning
	})
) <ReactSwitchProps>``;