import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
          </Route>
          <Route>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route>
            <Route path="/sign-in" element={<SignIn />} />
          </Route>
          <Route>
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
          <Route>
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route>
            <Route path="/offers" element={<Offers />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
