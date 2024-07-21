import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  author?: string | null;
  post?: PostWhereUniqueInput | null;
};
