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
					<Col span={24} md={16} xl={12} className="px-2 md:px-4">
						<Outlet />
					</Col>
					<Sidebar />
				</Row>
			</Container>
		</>
	);
}

export default MainLayout;
