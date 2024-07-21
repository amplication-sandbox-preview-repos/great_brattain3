import { UserActivityWhereUniqueInput } from "../userActivity/UserActivityWhereUniqueInput";

export type EventLogUpdateInput = {
  eventType?: string | null;
  timestamp?: Date | null;
  userActivity?: UserActivityWhereUniqueInput | null;
};
