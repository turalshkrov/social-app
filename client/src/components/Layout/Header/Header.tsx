import { Col, Row, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { useAppDispatch } from "@/hooks/hooks";
import { setIsOpen } from "@/store/slices/ModalSlice";
import { Button, Container, SearchInput } from "@/components/";

function Header() {
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
		<Row className="w-full bg-white sticky top-0 z-50">
			<Container className="py-4">
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
		</Row>
	);
}

export default Header;
