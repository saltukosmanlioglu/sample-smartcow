import Button from "components/button";
import TextInput from "components/text-input";

import "../Account.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-picture">
        <img src="/images/avatar.png" alt="Avatar" />
        <button>
          <img src="/images/edit.png" alt="Edit" />
        </button>
      </div>
      <div className="profile-detail">
        <div className="row gap-40">
          <TextInput title="First name" />
          <TextInput title="Last name" />
        </div>
        <div className="mt-20">
          <TextInput title="E-maill address" />
        </div>
        <div className="mt-40">
          <Button children="Save Changes" color="success" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
