import { UserActivityWhereUniqueInput } from "../userActivity/UserActivityWhereUniqueInput";

export type EventLogCreateInput = {
  eventType?: string | null;
  timestamp?: Date | null;
  userActivity?: UserActivityWhereUniqueInput | null;
};
