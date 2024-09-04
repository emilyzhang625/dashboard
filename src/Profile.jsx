import { useState } from "react";
import api from "./services/user";

function Profile() {
  const [name, setName] = useState("");
  api.getUser(1).then((res) => setName(res.name));

  return <div>{name}</div>;
}

export default Profile;
