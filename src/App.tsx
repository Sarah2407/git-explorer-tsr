import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import AuthProfile from "./components/AuthProfile";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import UserProfile from "./components/UserProfile";
import SearchUser from "./components/SearchUser";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar isLogged={isLogged} />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route
            path="/auth-profile"
            element={<AuthProfile username="exampleUser" />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/users/user/:username" element={<UserProfile />} />
          <Route path="/search" element={<SearchUser />} />
          <Route
            path="/login"
            element={
              <Login setIsLogged={setIsLogged} setUsername={setUsername} />
            }
          />
          <Route
            path="/authProfile"
            element={
              isLogged ? (
                <AuthProfile username={username} />
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
