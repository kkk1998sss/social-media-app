import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import SignUp from "./auth/SignUp";
import Menu from "./Menus/Menu";
import Followers from "./Menus/Followers";
import ChatArea from "./Menus/ChatArea";
import Profile from "./Menus/Profile";
import Notification from "./Menus/Notification";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Followers" element={<Followers />} />
          <Route path="/ChatArea" element={<ChatArea />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Notification" element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
