import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EventLogTitle } from "../eventLog/EventLogTitle";

export const UserActivityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
