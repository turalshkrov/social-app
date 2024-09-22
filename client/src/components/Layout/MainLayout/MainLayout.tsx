import { Container, Header, Navbar, Sidebar } from "@/components";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

function MainLayout() {
	return (
		<>
			<Header />
			<Container>
				<Row>
					<Navbar />
					<Col span={24} md={16} xl={12} className="px-4 pt-4 md:py-8 pb-16">
						<Outlet />
					</Col>
					<Sidebar />
				</Row>
			</Container>
		</>
	);
}

export default MainLayout;
