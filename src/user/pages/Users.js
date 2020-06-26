import React from "react";

import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Sabbir Anwar",
      image:
        "https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
