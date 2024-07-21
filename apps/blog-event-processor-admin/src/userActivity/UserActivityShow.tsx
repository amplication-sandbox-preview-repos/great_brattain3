import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USERACTIVITY_TITLE_FIELD } from "./UserActivityTitle";

export const UserActivityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User" source="user" />
        <TextField label="Action" source="action" />
        <TextField label="Timestamp" source="timestamp" />
        <ReferenceManyField
          reference="EventLog"
          target="userActivityId"
          label="EventLogs"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
