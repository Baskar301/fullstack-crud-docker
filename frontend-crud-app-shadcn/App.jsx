import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/CRUDapp/Navbar";
import Home from "@/CRUDApp/Home";
import AddUser from "@/CRUDApp/AddUser";
import UpdateUser from "@/CRUDApp/UpdateUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
