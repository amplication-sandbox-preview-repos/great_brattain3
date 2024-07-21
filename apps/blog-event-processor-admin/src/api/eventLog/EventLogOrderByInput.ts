import { SortOrder } from "../../util/SortOrder";

export type EventLogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  eventType?: SortOrder;
  timestamp?: SortOrder;
  userActivityId?: SortOrder;
};
