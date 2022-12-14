import Login from "./components/Login";
import Logout from "./components/Logout";
import "./App.css";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-2/6 bg-gray-800/40 rounded-md flex flex-col justify-center items-center p-6 space-y-2">
        <p className="text-4xl font-bold text-white pb-10">Login</p>
        <div className="flex w-full justify-around">
          <Login />
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default App;
