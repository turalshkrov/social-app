export interface iUser {
	_id: string;
	name: string;
	username: string;
	email: string;
	avatar: string;
	createdAt: Date;
	following: string[];
	followers: string[];
	posts: string[];
}

export interface iPost {
	_id: string;
	author: iUser;
	content: string;
	media?: string;
	likes: string[];
	comments: CommentType[];
	createdAt: Date;
}

export interface CommentType {
	_id: string;
	author: iUser;
	postId: string;
	content: string;
	createdAt: Date;
}
