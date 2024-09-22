import {
	MdBlock,
	MdFlag,
	MdPersonAdd,
	MdShare,
	MdVolumeOff,
} from "react-icons/md";
import cn from "classnames";
import { Link } from "react-router-dom";
import { Dropdown, MenuProps, Space } from "antd";
import { FiMoreHorizontal } from "react-icons/fi";

import { iPostContextMenuProps } from "./iPostContextMenu";

function PostContextMenu({ className, data }: iPostContextMenuProps) {
	const handleFollow = () => {
		console.log("follow", data.author._id);
	};

	const items: MenuProps["items"] = [
		{
			key: "follow",
			label: (
				<Space onClick={handleFollow}>
					<MdPersonAdd size={16} className="mr-2" />
					Follow {`@${data.author.username}`}
				</Space>
			),
		},
		{
			key: "block",
			label: (
				<Space onClick={handleFollow}>
					<MdBlock size={16} className="mr-2" />
					Block {`@${data.author.username}`}
				</Space>
			),
		},
		{
			key: "mute",
			label: (
				<Space onClick={handleFollow}>
					<MdVolumeOff size={16} className="mr-2" />
					Mute {`@${data.author.username}`}
				</Space>
			),
		},
		{
			key: "share",
			label: (
				<Space onClick={handleFollow}>
					<MdShare size={16} className="mr-2" /> Share post
				</Space>
			),
		},
		{
			key: "report",
			label: (
				<Link to={`/report-post/${data._id}`} onClick={handleFollow}>
					<Space>
						<MdFlag size={16} className="mr-2" />
						Report post
					</Space>
				</Link>
			),
		},
	];
	return (
		<Dropdown
			className={cn(className, "ml-4 md:ml-0")}
			menu={{ items }}
			placement="bottomLeft"
			trigger={["click"]}
		>
			<FiMoreHorizontal size={20} className="cursor-pointer" />
		</Dropdown>
	);
}

export default PostContextMenu;
