import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventLogListRelationFilter } from "../eventLog/EventLogListRelationFilter";

export type UserActivityWhereInput = {
  id?: StringFilter;
  user?: StringNullableFilter;
  action?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  eventLogs?: EventLogListRelationFilter;
};
