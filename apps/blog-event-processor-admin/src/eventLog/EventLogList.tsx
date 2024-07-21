import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERACTIVITY_TITLE_FIELD } from "../userActivity/UserActivityTitle";

export const EventLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EventLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="EventType" source="eventType" />
        <TextField label="Timestamp" source="timestamp" />
        <ReferenceField
          label="UserActivity"
          source="useractivity.id"
          reference="UserActivity"
        >
          <TextField source={USERACTIVITY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
