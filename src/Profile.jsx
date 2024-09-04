import "./Profile.css";
import emailIcon from "./assets/email.svg";
import phoneIcon from "./assets/call-phone.svg";
import websiteIcon from "./assets/website-with-text.svg";
import homeIcon from "./assets/home.svg";

function Profile({ user, setId }) {
  const handleSwitch = (newId) => {
    if (newId <= 10) setId(newId);
    else setId(1);
  };
  return (
    <div className="user-container">
      <div className="sect-title">Profile</div>
      <div className="box-container">
        <div className="inline">
          <div className="post-title">{user.name} </div> | @{user.username}
        </div>
        <div className="icon-text">
          <img src={emailIcon}></img> {user.email}
        </div>
        <div className="icon-text">
          <img src={phoneIcon}></img> {user.phone}
        </div>
        <div className="icon-text">
          <img src={websiteIcon}></img> {user.website}
        </div>
        <div className="icon-text">
          <img src={homeIcon}></img> {user.address.street} {user.address.suite},
          <div>
            {user.address.city}, {user.address.zipcode}
          </div>
        </div>
      </div>
      <div className="box-container">
        <div className="post-title">{user.company.name}</div>
        <div>{user.company.catchPhrase}</div>
      </div>
      <div className="center">
        <button onClick={() => handleSwitch(user.id + 1)}>Switch User</button>
      </div>
    </div>
  );
}

export default Profile;
