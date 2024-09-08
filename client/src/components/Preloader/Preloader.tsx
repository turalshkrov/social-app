import { Row } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const Preloader = () => {
    return (
        <Row
            justify="center"
            className="items-center h-screen w-screen absolute z-10"
        >
            <LoadingOutlined />
        </Row>
    );
};
