import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Profile from "@/pages/[profile]";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile/:username" element={<Profile/>}/>
    </Routes>
  )
}
