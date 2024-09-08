import cn from "classnames";
import { Typography } from "antd";

import { iLogoProps } from "./iLogo";

export const Logo = ({ className, ...rest }: iLogoProps) => {
    return (
        <Typography.Title
            level={2}
            className={cn(className, "!font-bold text-center !my-6")}
            {...rest}
        >
            Connectr
        </Typography.Title>
    );
};
