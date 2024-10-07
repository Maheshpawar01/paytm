import React from "react";
import { useState } from "react";
import Button from "./Button";

function Users() {
  const [users, setUsers] = useState([
    {
      firstName: "Mahesh",
      lastName: "singh",
      _id: 1,
    },
  ]);
  return (
    <>
      <div>Users</div>
      <div className="my-2">
        <input type="text" placeholder="Search Users..." className="w-full px-2 py-1 border rounded border-slate-400" />
      </div>
    </>
  );
}

export default Users;
