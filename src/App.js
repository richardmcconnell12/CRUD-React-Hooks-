import React, { useState } from "react";
import UserTable from "./Tables /UserTable";
import AddUserForm from "./Forms/AddUserForm";
import EditUserForm from "./Forms/EditUserForm";

const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" }
  ];

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // ADDING NEW USER
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  // DELETING USERS
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  // EDITING USER
  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
