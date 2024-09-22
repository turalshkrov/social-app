import cn from "classnames";
import { Button as AntButton } from "antd";

import "./ButtonStyle.scss";
import { iButtonProps } from "./iButton";

export const Button = ({
	type = "primary",
	className,
	children,
	...rest
}: iButtonProps) => {
	return (
		<AntButton
			type={type}
			size="large"
			className={cn(className, "rounded py-2.5")}
			{...rest}
		>
			{children}
		</AntButton>
	);
};
