import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./page/dashboard/Dashboard";
import Layout from "./page/layout/Layout";
import Login from "./page/Login/Login";
import NotFound from "./page/NotFound";
import Register from "./page/register/Register";

function App() {
  const islogin = localStorage.getItem("access_token");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={islogin ? <Navigate to="/dashboard" /> : <Login />} />
            <Route path="register" element={islogin ? <Navigate to="/dashboard" /> : <Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/dashboard" element={!islogin ? <Navigate to="/" /> : <Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
