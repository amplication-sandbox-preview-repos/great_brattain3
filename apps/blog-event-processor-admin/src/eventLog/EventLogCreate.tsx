import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserActivityTitle } from "../userActivity/UserActivityTitle";

export const EventLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="EventType" source="eventType" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <ReferenceInput
          source="userActivity.id"
          reference="UserActivity"
          label="UserActivity"
        >
          <SelectInput optionText={UserActivityTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
