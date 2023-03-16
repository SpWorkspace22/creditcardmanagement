import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/header";
import Home from "./components/Home"
import NewRequest from "./components/usersrequest/newRequest";
export default function App() {
  return (  
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/newRequest" element={<NewRequest />} />
            <Route path="/details" element={<NewRequest />} />
          </Routes>
      </BrowserRouter>
  );
}