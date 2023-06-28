import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { SelectOptionTypes } from "../@components/order/orderOption/orderOption";
import { payKakao } from "../api/payKakao";
import { orderStyle } from "../recoil/order/fontStyle";
import { selectCategory } from "../recoil/order/selectCatogry";
import { selectOptions } from "../recoil/order/selectOptions";
import { orderStyleDataType } from "../type/order/orderStyleData";

export default function Checkout() {
  const category = useRecoilValue<string>(selectCategory);
  const options = useRecoilValue<SelectOptionTypes>(selectOptions);
  const style = useRecoilValue<orderStyleDataType>(orderStyle);
  //   const price = useRecoilValue<number>(orderMoney);
  const price = 50_000;

  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate();

  const data = {
    uid: localStorage.getItem("uid"),
    category: category,
    options,
    style,
    price: price,
    status: 0,
    createdAt: year + "." + month + "." + date,
    endAt: "",
  };

  //   const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
  //   const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

  //   const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);

  //   useEffect(() => {
  //     (async () => {
  //       const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

  //       paymentWidget.renderPaymentMethods("#payment-widget", price);

  //       paymentWidgetRef.current = paymentWidget;
  //     })();
  //   }, []);

  //   function nanoid(): string {
  //     throw new Error("Function not implemented.");
  //   }

  const config = {
    next_redirect_pc_url: "",
    tid: "",
    params: {
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: "funzip 결제",
      quantity: 1,
      total_amount: 10,
      vat_amount: 0,
      tax_free_amount: 0,
      approval_url: "http://localhost:3000/order-success",
      fail_url: "http://localhost:3000/order-fail",
      cancel_url: "http://localhost:3000/order-cancel",
    },
  };

  const { params } = config;

  useEffect(() => {
    payKakao(params);
  }, []);

  return (
    // <div className="App">
    //   <h1>주문서</h1>
    //   <div id="payment-widget" />
    //   <button
    //     onClick={async () => {
    //       const paymentWidget = paymentWidgetRef.current;

    //       try {
    //         await paymentWidget?.requestPayment({
    //           orderId: nanoid(),
    //           orderName: "토스 티셔츠 외 2건",
    //           customerName: "김토스",
    //           customerEmail: "customer123@gmail.com",
    //           successUrl: `${window.location.origin}/success`,
    //           failUrl: `${window.location.origin}/fail`,
    //         });
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     }}>
    //     결제하기
    //   </button>
    // </div>
    <></>
  );
}
