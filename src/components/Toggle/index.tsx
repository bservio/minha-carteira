import React from "react";


import { Container, ToggleLabel, ToggleButton } from './styles';

const Toggle: React.FC = () => (
	<Container>
		<ToggleLabel>
			Light
		</ToggleLabel>
		<ToggleButton
			checked={false}
			uncheckedIcon={false}
			checkedIcon={false}
			onChange={() => { console.log('oi') }}
		/>
		<ToggleLabel>
			Dark
		</ToggleLabel>
	</Container>
);

export default Toggle;