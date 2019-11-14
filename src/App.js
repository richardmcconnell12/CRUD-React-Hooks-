import React from "react";
import UserTable from "./Tables /userTables";

const App = () => {
  return (
    <div className="container">
      <h1>CRUD App With React Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default App;
