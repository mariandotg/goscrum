import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/views/Login/Login";
import Register from "./components/views/Register/Register";
import Error404 from "./components/views/Error 404/Error404";
import Tasks from "./components/views/Tasks/Tasks";
import "./App.css";

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("logged")) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Tasks />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
