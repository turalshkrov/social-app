import cn from "classnames";
import { Col, Row, Typography } from "antd";

import { iHeaderProps } from "./iHeader";
import { Button, Container, SearchInput } from "@/components/";
import { UserOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@/hooks/hooks";
import { setIsOpen } from "@/store/slices/ModalSlice";

function Header({ className }: iHeaderProps) {
    const dispatch = useAppDispatch();
    const handleOpenLogoutModal = () => {
        dispatch(
            setIsOpen({
                id: "logout",
                isOpen: true,
            })
        );
    };
    return (
        <Container className={cn(className, "py-4 sticky top-0")}>
            <Row align="middle" justify="start">
                <Col span={24} md={8} xl={6} className="md:pl-4 xl:pl-8">
                    <Typography.Title
                        level={4}
                        className="!m-0 text-center md:text-left"
                    >
                        Connectr
                    </Typography.Title>
                </Col>
                <Col span={0} md={16} xl={12} className="px-4">
                    <SearchInput placeholder="Search" />
                </Col>
                <Col span={0} xl={6} className="text-right md:pr-8">
                    <Button type="link" onClick={handleOpenLogoutModal}>
                        Logout
                        <UserOutlined />
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
