import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";
function Logout(res) {
  const onSuccess = () => {
    alert("Logout Successfully");
    console.log("Logout Success: ", res);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
