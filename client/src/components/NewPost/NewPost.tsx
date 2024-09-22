import cn from "classnames";

import { useForm } from "antd/es/form/Form";
import { Avatar, Card, Form, Input, Row, Space, Upload } from "antd";

import { Button } from "../ui";
import { MdImage } from "react-icons/md";
import { iNEWPOSTProps } from "./iNewPost";

import "./NewPostStyle.scss";

function NewPost({ className }: iNEWPOSTProps) {
	const [form] = useForm();
	const { getFieldsValue } = form;

	const handleSubmit = () => {
		const formData = new FormData();
		formData.append("content", getFieldsValue().content);
		formData.append("media", getFieldsValue().media?.file);
		console.log("formData", formData);
	};

	return (
		<Card bordered={true} className={cn(className, "w-full")}>
			<Row className="flex" justify="space-between">
				<Avatar children={"TS"} size={48} />
				<Form form={form} className="new-post-form" onFinish={handleSubmit}>
					<Form.Item name="content">
						<Input
							className="w-full new-post-input"
							placeholder="What's on your mind?"
						/>
					</Form.Item>
					<Row className="flex justify-between w-full items-center">
						<Form.Item name="media" className="m-0">
							<Upload beforeUpload={() => false} maxCount={1}>
								<Space className="cursor-pointer">
									<MdImage />
									Add Media
								</Space>
							</Upload>
						</Form.Item>
						<Button size="middle" shape="round" onClick={handleSubmit}>
							Post
						</Button>
					</Row>
				</Form>
			</Row>
		</Card>
	);
}

export default NewPost;
