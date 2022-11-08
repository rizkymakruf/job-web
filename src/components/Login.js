import React from "react";
import { GoogleLogin } from "react-google-login";
// import refreshToken
import { refreshTokenSetup } from "../utils/refreshToken";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../home";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";
function Login() {
  // const rout
  const onSuccess = (res) => {
    console.log("[Loging success] currentUser:", res.profileObj);

    // initialize the setup
    refreshTokenSetup(res);

    //route
    <Router>
      {/* <Switch> */}
      <Route path="/home" component={Home}></Route>
      {/* </Switch> */}
    </Router>;
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
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
