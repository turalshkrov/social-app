import { Col, List, Typography, Grid, Flex } from "antd";
import { MdOutlineNotifications } from "react-icons/md";
import {
    HomeOutlined,
    MailOutlined,
    SearchOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const navbarItems = [
    {
        label: "Home",
        link: "/home",
        icon: <HomeOutlined />,
    },
    {
        label: "Messages",
        link: "/messages",
        icon: <MailOutlined />,
    },
    {
        label: "Search",
        link: "/search",
        icon: <SearchOutlined />,
    },
    {
        label: "Notifications",
        link: "/notifications",
        icon: <MdOutlineNotifications />,
    },
    {
        label: "Profile",
        link: "/profile",
        icon: <UserOutlined />,
    },
];

const { useBreakpoint } = Grid;

function Navbar() {
    const screens = useBreakpoint();

    return (
        <Col span={24} md={8} lg={6} className="md:p-8">
            {screens.md ? (
                <List
                    bordered
                    dataSource={navbarItems}
                    renderItem={(item) => (
                        <List.Item>
                            <NavLink
                                to={item.link}
                                className="flex items-center font-normal navlink"
                            >
                                <Typography.Text className="text-lg">
                                    {item.icon}
                                </Typography.Text>
                                <Typography.Text className="ml-2 text-base hidden md:block">
                                    {item.label}
                                </Typography.Text>
                            </NavLink>
                        </List.Item>
                    )}
                />
            ) : (
                <Flex
                    justify="space-around"
                    className="py-4 items-center fixed bottom-0 left-0 w-full border border-stale-800"
                >
                    {navbarItems.map((item) => (
                        <NavLink to={item.link} className="navlink">
                            <Typography.Text className="text-lg">
                                {item.icon}
                            </Typography.Text>
                        </NavLink>
                    ))}
                </Flex>
            )}
        </Col>
    );
}

export default Navbar;
