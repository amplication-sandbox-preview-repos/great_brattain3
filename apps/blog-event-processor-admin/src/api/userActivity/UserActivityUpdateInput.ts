import { EventLogUpdateManyWithoutUserActivitiesInput } from "./EventLogUpdateManyWithoutUserActivitiesInput";

export type UserActivityUpdateInput = {
  user?: string | null;
  action?: string | null;
  timestamp?: Date | null;
  eventLogs?: EventLogUpdateManyWithoutUserActivitiesInput;
};
