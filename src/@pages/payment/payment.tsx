export default function Payment() {
  //   const navigate = useNavigate();
  //   const IMP = window.IMP; // 생략 가능
  //   IMP?.init("imp44561238");

  //   const amount = 100;

  //   const handlePayment = () => {
  //     window.IMP?.init("iamport");
  //     // const amount: number =
  //     //   priceSelections.filter((price) => price.value === order.price).map((price) => price.amount)[0] || 0;
  //     if (!amount) {
  //       alert("결제 금액을 확인해주세요");
  //       return;
  //     }
  //     const data: RequestPayParams = {
  //       pg: "html5_inicis",
  //       pay_method: "card",
  //       merchant_uid: `mid_${new Date().getTime()}`,
  //       amount: amount,
  //       buyer_tel: "00-000-0000",
  //     };
  //     const callback = (response: RequestPayResponse) => {
  //       const { success, merchant_uid, error_msg, imp_uid, error_code } = response;
  //       if (success) {
  //         //결제 성공 시 로직
  //         navigate("/order-success");
  //         // console.log(response);
  //       } else {
  //         //결제 실패 시 로직
  //         navigate("/order-fail");
  //         // console.log(response);
  //       }
  //     };
  //     window.IMP?.request_pay(data, callback);
  //   };
  return <div>결제하기</div>;
}
