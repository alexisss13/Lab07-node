import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import BoardUser from "./pages/BoardUser";
import BoardModerator from "./pages/BoardModerator";
import BoardAdmin from "./pages/BoardAdmin";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Perfil — solo usuarios logueados */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        {/* Panel de usuario → accesible por todos los roles */}
        <Route
          path="/user"
          element={
            <PrivateRoute roles={["ROLE_USER", "ROLE_MODERATOR", "ROLE_ADMIN"]}>
              <BoardUser />
            </PrivateRoute>
          }
        />

        {/* Panel de moderador → accesible por mod y admin */}
        <Route
          path="/mod"
          element={
            <PrivateRoute roles={["ROLE_MODERATOR", "ROLE_ADMIN"]}>
              <BoardModerator />
            </PrivateRoute>
          }
        />

        {/* Panel de administrador → solo admin */}
        <Route
          path="/admin"
          element={
            <PrivateRoute roles={["ROLE_ADMIN"]}>
              <BoardAdmin />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
