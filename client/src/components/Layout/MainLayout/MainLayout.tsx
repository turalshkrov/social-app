import { Container, Navbar } from "@/components";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <Container>
            <Row>
                <Navbar />
                <Col span={24} md={12}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
}

export default MainLayout;
