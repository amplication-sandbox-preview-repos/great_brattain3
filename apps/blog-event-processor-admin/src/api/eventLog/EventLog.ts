import { UserActivity } from "../userActivity/UserActivity";

export type EventLog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  eventType: string | null;
  timestamp: Date | null;
  userActivity?: UserActivity | null;
};
