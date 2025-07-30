import profilePicture from "../assets/profilepic.png";

function ProfilePicture() {
  return (
    <div className="profile-pic-container">
      <div>
        <img src={profilePicture} alt="alt" />
      </div>
      <div className="name-profession-container">
        <div>
            <h1>Kyle Ando</h1>
            <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePicture;
