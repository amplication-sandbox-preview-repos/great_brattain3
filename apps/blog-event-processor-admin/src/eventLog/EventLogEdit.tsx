import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserActivityTitle } from "../userActivity/UserActivityTitle";

export const EventLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
