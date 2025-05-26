import { ThemeProvider } from "./components/ui/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./CRUDapp/Navbar";
import Home from "./CRUDapp/Home";
import AddUser from "./CRUDapp/Adduser";
import UpdateUser from "./CRUDapp/UpdateUser";
import { Toaster } from "sonner";
/*--------------------------------------------*/
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/updateuser/:id" element={<UpdateUser />} />
        </Routes>
        <Toaster position="top-center" richColors />
      </Router>
    </ThemeProvider>
  );
}

export default App;
