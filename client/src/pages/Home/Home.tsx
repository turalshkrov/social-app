import { Row } from "antd";
import { NewPost, Post } from "@/components";
import { iPost } from "@/types";

const data: iPost = {
	_id: "1",
	author: {
		_id: "1",
		name: "Bessie Cooper",
		username: "sara",
		avatar:
			"https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA",
		createdAt: new Date(),
		following: [],
		email: "",
		followers: [],
		posts: [],
	},
	content:
		"In today's fast-paced, digitally driven world, digital marketing is not just a strategy. it's a necessity for businesses of all sizes. 📈",
	media: "https://picsum.photos/300/200",
	likes: [],
	comments: [],
	createdAt: new Date("2022-01-01"),
};

function Home() {
	return (
		<Row>
			<NewPost />
			<Post data={data} />
		</Row>
	);
}

export default Home;
