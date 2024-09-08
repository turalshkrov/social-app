import cn from "classnames";
import { Input as AntInput } from "antd";

import "./InputStyle.scss";
import { iInputProps } from "./iInput";

export const Input = ({
    className,
    inputType = "text",
    ...rest
}: iInputProps) => {
    return (
        <>
            {inputType === "text" ? (
                <AntInput
                    size="large"
                    autoComplete="off"
                    className={cn(className, "rounded px-4 py-2.5")}
                    {...rest}
                />
            ) : (
                <AntInput.Password
                    size="large"
                    autoComplete="off"
                    className={cn(className, "rounded px-4 py-2.5")}
                    {...rest}
                />
            )}
        </>
    );
};
