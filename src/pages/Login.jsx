import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/app_context";
import { DBContext } from "../contexts/db_context";
import '../assets/styles/login.css'

function Login() {
  const { isLoggedIn, setIsLoggedIn , } = useContext(AppContext);
  const {username, setUsername, users, readUsersFromDB } = useContext(DBContext)

  useEffect(() => {
    readUsersFromDB()
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()

    let elements = event.target.elements;
    let {username: usernameInput, password: passwordInput} = elements;

    console.log(users)

    if (users.length) {
      users.forEach((u) => {
        if (u.username === usernameInput.value && u.password === passwordInput.value) {
          setUsername(usernameInput.value);
          setIsLoggedIn(true)
          console.log('Login successful',usernameInput.value,passwordInput)
          alert(`Welcome ${username}!`);
          // window.location.assign('/')
          console.log(username)
        }
      })
    }
  }



  return (
    <div className="signup-page">
      <h1>Welcome to Journalio</h1>
      <h3>Please login below</h3>
      <form action="" className="login" onSubmit={handleSubmit}>
        <div className="email">
          <label htmlFor="email">Username</label>
          <input type="text" name="login" id="username" className="login" onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="login"
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
