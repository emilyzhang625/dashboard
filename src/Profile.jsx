import { useState } from "react";
import api from "./services/user";

function Profile({ id }) {
  const [user, setUser] = useState({ name: "", username: "" });
  api.getUser(id).then((res) => setUser(res));

  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phone}</div>
      <div>Website: {user.website}</div>
    </div>
  );
}

export default Profile;
