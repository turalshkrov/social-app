import { Container, Header, Navbar, Sidebar } from "@/components";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <Container>
            <Header />
            <Row>
                <Navbar />
                <Col span={24} md={16} xl={12}>
                    <Outlet />
                </Col>
                <Sidebar />
            </Row>
        </Container>
    );
}

export default MainLayout;
