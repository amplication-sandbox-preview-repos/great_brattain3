import { SortOrder } from "../../util/SortOrder";

export type UserActivityOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
  action?: SortOrder;
  timestamp?: SortOrder;
};
