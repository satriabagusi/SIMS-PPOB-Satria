import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import PayServicePage from '../pages/pay_service';
import ProfilePage from "../pages/profile";
import RegisterPage from "../pages/register";
import TopUpPage from '../pages/top_up';
import TransactionHistoryPage from '../pages/transaction_history';
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="login"
          element={
            isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />
          }
        />
        <Route
          path="register"
          element={
            isAuthenticated ? <Navigate to="/" replace /> : <RegisterPage />
          }
        />

        <Route path="/" element={<ProtectedRoute element={<HomePage />}/>} />
        <Route path="/account" element={<ProtectedRoute element={<ProfilePage />}/>} />
        <Route path="/transaction" element={<ProtectedRoute element={<TransactionHistoryPage />}/>} />
        <Route path="/top-up" element={<ProtectedRoute element={<TopUpPage />}/>} />
        <Route path="/pay/:service_code" element={<ProtectedRoute element={<PayServicePage />}/>} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
