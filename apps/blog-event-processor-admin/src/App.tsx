import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserActivityList } from "./userActivity/UserActivityList";
import { UserActivityCreate } from "./userActivity/UserActivityCreate";
import { UserActivityEdit } from "./userActivity/UserActivityEdit";
import { UserActivityShow } from "./userActivity/UserActivityShow";
import { EventLogList } from "./eventLog/EventLogList";
import { EventLogCreate } from "./eventLog/EventLogCreate";
import { EventLogEdit } from "./eventLog/EventLogEdit";
import { EventLogShow } from "./eventLog/EventLogShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BlogEventProcessor-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserActivity"
          list={UserActivityList}
          edit={UserActivityEdit}
          create={UserActivityCreate}
          show={UserActivityShow}
        />
        <Resource
          name="EventLog"
          list={EventLogList}
          edit={EventLogEdit}
          create={EventLogCreate}
          show={EventLogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
