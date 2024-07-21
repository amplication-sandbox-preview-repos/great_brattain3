import { EventLog } from "../eventLog/EventLog";

export type UserActivity = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user: string | null;
  action: string | null;
  timestamp: Date | null;
  eventLogs?: Array<EventLog>;
};
