import { Button } from "@/components";
import { PlusOutlined } from "@ant-design/icons";
import { Avatar, Col, List, Typography } from "antd";

const data = [
    {
        id: "1",
        imageUrl: "https://randomuser.me/api/portraits/women/58.jpg",
        fullName: "Olivia Anderson",
        bio: "Financial Analyst",
    },
    {
        id: "2",
        imageUrl: "https://randomuser.me/api/portraits/men/58.jpg",
        fullName: "Thomas Baker",
        bio: "Graphic Designer",
    },
    {
        id: "3",
        imageUrl: "https://randomuser.me/api/portraits/women/67.jpg",
        fullName: "Lily Lee",
        bio: "Data Scientist",
    },
];

function Sidebar() {
    return (
        <Col className="md:p-4 2xl:p-8 " span={0} xl={6}>
            <List
                className="sticky w-full top-[106px]"
                header={
                    <Typography.Title level={5}>
                        Suggested Friends
                    </Typography.Title>
                }
                dataSource={data}
                bordered={true}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.imageUrl} size={36} />}
                            title={item.fullName}
                            description={item.bio}
                            className="!items-center"
                        />
                        <Button
                            type="link"
                            shape="circle"
                            size="middle"
                            icon={<PlusOutlined />}
                        />
                    </List.Item>
                )}
            />
        </Col>
    );
}

export default Sidebar;
