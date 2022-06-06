import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {

  const adminUser = {
    username: "bridgenote",
    password: "admin123"
  }

  const [ user, setUser ] = useState({username: "", password: ""})
  const [ error, setError ] = useState("")

  const Login = details => {
    console.log(details)

    if (details.username == adminUser.username && details.password == adminUser.password) {
      console.log('logging in')
      setUser({
        username: details.username,
      })
    } else {
      setError("Username atau Password salah!")
    }
  }

  const Logout = () => {
    console.log("Logged Out!")
    setUser({
      username: "",
    })
  }

  return (
    <div className='App'>
      {(user.username !== "") ? (
        <div className="welcome">
          <h2 className="text-3xl font-bold underline">Welcome, <span> {user.name} </span> </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
