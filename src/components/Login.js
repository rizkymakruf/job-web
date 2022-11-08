import React from "react";
import { GoogleLogin, redirect } from "react-google-login";
// import refreshToken
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function Login() {
  // route
  const onSuccess = async (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    refreshTokenSetup(res);
    <div>Kl</div>;
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
        uxMode={redirect}
        redirectUri={"/dashboard"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
