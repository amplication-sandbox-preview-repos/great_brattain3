import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USERACTIVITY_TITLE_FIELD } from "../userActivity/UserActivityTitle";

export const EventLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
