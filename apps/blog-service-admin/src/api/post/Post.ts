import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  author: string | null;
  category?: Category | null;
  comments?: Array<Comment>;
};
