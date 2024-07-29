export interface UserType {
  _id: string,
  name: string,
  username: string,
  email: string,
  avatar: string,
  createdAt: Date,
  following: string[],
  followers: string[],
  posts: string[],
}

export interface PostType {
  _id: string,
  author: UserType,
  content: string,
  media?: string,
  likes: string[],
  comments: CommentType[],
  createdAt: Date,
}

export interface CommentType {
  _id: string,
  author: UserType,
  postId: string,
  content: string,
  createdAt: Date,
}