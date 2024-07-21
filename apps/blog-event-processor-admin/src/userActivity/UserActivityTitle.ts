import { UserActivity as TUserActivity } from "../api/userActivity/UserActivity";

export const USERACTIVITY_TITLE_FIELD = "user";

export const UserActivityTitle = (record: TUserActivity): string => {
  return record.user?.toString() || String(record.id);
};
