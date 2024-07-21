import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserActivityWhereUniqueInput } from "../userActivity/UserActivityWhereUniqueInput";

export type EventLogWhereInput = {
  id?: StringFilter;
  eventType?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userActivity?: UserActivityWhereUniqueInput;
};
