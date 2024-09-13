import {
    MdHomeFilled,
    MdNotifications,
    MdPerson,
    MdSearch,
    MdSend,
} from "react-icons/md";
import { Col, List, Typography, Grid, Flex } from "antd";

import { NavLink } from "react-router-dom";

const navbarItems = [
    {
        label: "Home",
        link: "/home",
        icon: <MdHomeFilled />,
    },
    {
        label: "Messages",
        link: "/messages",
        icon: <MdSend />,
    },
    {
        label: "Search",
        link: "/search",
        icon: <MdSearch />,
    },
    {
        label: "Notifications",
        link: "/notifications",
        icon: <MdNotifications />,
    },
    {
        label: "Profile",
        link: "/profile",
        icon: <MdPerson />,
    },
];

const { useBreakpoint } = Grid;

function Navbar() {
    const screens = useBreakpoint();

    return (
        <Col span={24} md={8} xl={6} className="md:px-4 2xl:px-8 py-8">
            {screens.md ? (
                <List
                    className="sticky w-full top-[106px] z-50 navbar-container"
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
                                <Typography.Text className="ml-4 text-base hidden md:block">
                                    {item.label}
                                </Typography.Text>
                            </NavLink>
                        </List.Item>
                    )}
                />
            ) : (
                <Flex
                    justify="space-around"
                    className="py-4 items-center fixed bottom-0 left-0 w-full border border-stale-800  z-50 navbar-container"
                >
                    {navbarItems.map((item) => (
                        <NavLink
                            to={item.link}
                            className="navlink"
                            key={item.link}
                        >
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
