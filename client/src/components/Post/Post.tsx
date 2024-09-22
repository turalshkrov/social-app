import {
	MdFavorite,
	MdFavoriteBorder,
	MdChatBubbleOutline,
} from "react-icons/md";
import cn from "classnames";
import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Card, Flex, Image, Row, Space, Typography } from "antd";

import { iPostProps } from "./iPost";
import { PostContextMenu } from "./components";

const { Text, Title } = Typography;

function Post({ className, data }: iPostProps) {
	// const [showComments, setShowComments] = useState(false);
	const [liked, setLiked] = useState(false);
	return (
		<Card className={cn(className, "mt-4 w-full")}>
			<Row justify="space-between" className="items-center mb-4">
				<Space>
					<Avatar src={data.author.avatar} size={48} />
					<Flex className="flex-col ml-2">
						<Title level={5} className="!m-0">
							{data.author.name}
						</Title>
						<Link to={`/users/${data.author.username}`}>
							{data.author.username}
						</Link>
					</Flex>
				</Space>

				<Space className="flex-col items-end justify-center gap-0">
					<PostContextMenu data={data} />
					<Text className="text-sm" type="secondary">
						{moment(data.createdAt).fromNow()}
					</Text>
				</Space>
			</Row>

			<Row className="">
				<Text className="text-justify">{data.content}</Text>
			</Row>

			<Row className="w-full py-4">
				{data.media && (
					<Image src={data.media} width="100%" className="rounded-md" />
				)}
			</Row>

			<Row justify="space-between" className="py-4">
				<Space className="cursor-pointer">
					<MdChatBubbleOutline className="ml-2" size={20} />
					Comment
				</Space>

				<Space className="cursor-pointer">
					{liked ? (
						<MdFavorite
							color="#e2375e"
							onClick={() => setLiked(!liked)}
							size={20}
							className="ml-2"
						/>
					) : (
						<MdFavoriteBorder
							onClick={() => setLiked(!liked)}
							size={20}
							className="ml-2"
						/>
					)}
				</Space>
			</Row>
		</Card>
	);
}

export default Post;
