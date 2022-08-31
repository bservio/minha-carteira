import React from "react";



import { Containter } from "./styles";

interface IMessageBoxProps {
	title: string;
	description: string;
	footerText: string;
	icon: string;
}

const MessageBox: React.FC<IMessageBoxProps> = ({
	title, description, footerText, icon
}) => {
	return (
		<Containter>
			<header>
				<h1>
					{title}
					<img src={icon} alt={title} />
				</h1>
				<p>
					{description}
				</p>
			</header>

			<footer>
				<span>
					{footerText}
				</span>
			</footer>

		</Containter>
	);
};

export default MessageBox;