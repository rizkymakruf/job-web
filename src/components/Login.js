import React from "react";
import { GoogleLogin } from "react-google-login";
// import refreshToken
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";
function Login() {
  // route
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(`Logged in successfully welcome ${res.profileObj.name}.`);
    refreshTokenSetup(res);
  };
  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText={"Login"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        redirectUri={"/home"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
