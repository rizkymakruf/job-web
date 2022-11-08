import Login from "./components/Login";
import Logout from "./components/Logout";
import "./App.css";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-2">
      <div className="w-2/6 flex justify-start">
        <p className="text-4xl font-bold">Login</p>
      </div>
      <div className="w-2/6 bg-gray-800/40 rounded-md flex flex-col justify-center items-center p-6 space-y-2">
        <input
          type={"text"}
          placeholder="Email"
          className="p-2 rounded-md w-full"
          publicpublic
        ></input>
        <input
          type={"password"}
          placeholder="Password"
          className="p-2 rounded-md w-full"
        ></input>
        <button className="w-full bg-blue-400 py-2 px-4 text-white font-semibold rounded-md">
          Login
        </button>
        <div className="w-full py-1 flex flex-col justify-center items-center">
          <p className="text-white">or Login with</p>
        </div>
        <Login />
        <Logout />
      </div>
    </div>
  );
}

export default App;
