import getUser from "./services/user";
import { useState } from "react";

function Profile() {
  const [name, setName] = useState("");
  getUser(1).then((res) => setName(res.name));

  return <div>{name}</div>;
}

export default Profile;
