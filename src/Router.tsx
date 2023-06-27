import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpGoogleForm from "./@components/Auth/signUpGoogleForm";
import Login from "./@pages/Auth/login";
import Faq from "./@pages/faq/faq";
import Main from "./@pages/main/main";
import MyPage from "./@pages/myPage/myPage";
import Order from "./@pages/order/order";
import OrderSuccess from "./@pages/orderSuccess/orderSuccess";
import Review from "./@pages/review/review";
import TutorialPage from "./@pages/tutorial/tutorialPage";
import OrderList from "./@pages/myPage/orderList";
import Coupon from "./@pages/myPage/coupon";
import Setting from "./@pages/myPage/setting";
import OrderDetail from "./@pages/myPage/orderDetail";
import Staff from "./@pages/admin/staff";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        
        <Route path="/staff" element={<Staff />} />

        <Route path="/order" element={<Order />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/tutorial" element={<TutorialPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/review" element={<Review />} />

          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/orderList" element={<OrderList />} />
          <Route path="/mypage/orderList/:orderId" element={<OrderDetail />} />
          <Route path="/mypage/coupon" element={<Coupon />} />
          <Route path="/mypage/setting" element={<Setting />} />

        <Route path="/login" element={<Login />} />
        <Route path="/google" element={<SignUpGoogleForm />} />
      </Routes>
    </BrowserRouter>
  );
}
