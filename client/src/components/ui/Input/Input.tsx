import cn from "classnames";
import { Input as AntInput } from "antd";

import "./InputStyle.scss";
import { iInputProps } from "./iInput";
import { SearchOutlined } from "@ant-design/icons";

export const Input = ({ className, ...rest }: iInputProps) => {
    return (
        <AntInput
            size="large"
            autoComplete="off"
            className={cn(className, "rounded px-4 py-2")}
            {...rest}
        />
    );
};

export const PasswordInput = ({ className, ...rest }: iInputProps) => {
    return (
        <AntInput.Password
            size="large"
            autoComplete="off"
            className={cn(className, "rounded px-4 py-2")}
            {...rest}
        />
    );
};

export const SearchInput = ({ className, ...rest }: iInputProps) => {
    return (
        <AntInput
            allowClear
            size="large"
            autoComplete="off"
            addonAfter={false}
            prefix={<SearchOutlined className="mr-2" />}
            className={cn(className, "rounded px-4 py-2")}
            {...rest}
        />
    );
};
