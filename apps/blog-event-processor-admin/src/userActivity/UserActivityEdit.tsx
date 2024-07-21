import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EventLogTitle } from "../eventLog/EventLogTitle";

export const UserActivityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="User" source="user" />
        <TextInput label="Action" source="action" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <ReferenceArrayInput
          source="eventLogs"
          reference="EventLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventLogTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
