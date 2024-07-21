import { EventLogCreateNestedManyWithoutUserActivitiesInput } from "./EventLogCreateNestedManyWithoutUserActivitiesInput";

export type UserActivityCreateInput = {
  user?: string | null;
  action?: string | null;
  timestamp?: Date | null;
  eventLogs?: EventLogCreateNestedManyWithoutUserActivitiesInput;
};
