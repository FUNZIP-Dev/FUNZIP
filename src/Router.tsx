import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpGoogleForm from "./@components/Auth/signUpGoogleForm";
import Login from "./@pages/Auth/login";
import Faq from "./@pages/faq/faq";
import Main from "./@pages/main/main";
import MyPage from "./@pages/myPage/myPage";
import Order from "./@pages/order/order";
import OrderSuccess from "./@pages/orderSuccess/orderSuccess";
import Review from "./@pages/review/review";
import Tutorial from "./@pages/tutorial/tutorial";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/review" element={<Review />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/google" element={<SignUpGoogleForm />} />
      </Routes>
    </BrowserRouter>
  );
}
