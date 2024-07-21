import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  author?: string | null;
  post?: PostWhereUniqueInput | null;
};
