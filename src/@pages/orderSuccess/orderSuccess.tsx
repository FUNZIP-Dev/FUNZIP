import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Nav from "../../@components/common/nav/nav";
import { SelectOptionTypes } from "../../@components/order/orderOption/orderOption";
import { OrderSuccessIc } from "../../assets";
import { orderStyle } from "../../recoil/order/fontStyle";
import { orderMoney } from "../../recoil/order/orderMoney";
import { selectCategory } from "../../recoil/order/selectCatogry";
import { selectOptions } from "../../recoil/order/selectOptions";
import { orderStyleDataType } from "../../type/order/orderStyleData";
import * as S from "./style";

export default function OrderSuccess() {
  const navigate = useNavigate();
  const category = useRecoilValue<string>(selectCategory);
  const options = useRecoilValue<SelectOptionTypes>(selectOptions);
  const style = useRecoilValue<orderStyleDataType>(orderStyle);
  const price = useRecoilValue<number>(orderMoney);
  const [orderList, setOrderList] = useState<any>();
  const [isPost, setIsPost] = useState<boolean>(true);
  const [searchParams] = useSearchParams();

  const hanldeMoveToMypage = () => {
    navigate("/mypage");
  };

  const hanldeMoveToHome = () => {
    navigate("/");
  };

  const submitOrder = async () => {
    try {
      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1; // 월
      let date = today.getDate();

      // console.log({
      //   uid: localStorage.getItem("uid"),
      //   category: category,
      //   options,
      //   style,
      //   price: price,
      //   status: 0,
      //   createdAt: year + "." + month + "." + date,
      //   endAt: "",
      // });
      const db = getFirestore();

      const orderRef = collection(db, "order");
      await addDoc(orderRef, {
        uid: localStorage.getItem("uid"),
        category: category,
        options,
        style,
        price: price,
        status: 0,
        createdAt: year + "." + month + "." + date,
        endAt: "",
      });

      // const userRef = collection(db, "users");
      // const userDatas: any[] = [];

      // onSnapshot(userRef, (snapshot: any) => {
      //   snapshot.forEach((doc: any) => {
      //     userDatas.push({ id: doc.id, ...doc.data() });
      //   });
      //   setOrderList(userDatas);
      // });

      // const myId: any = localStorage.getItem("uid");
      // const orderLists = userDatas?.filter(({ id }: any) => id === myId);
      // const lists = [...orderLists[0]?.orderList];
      // lists.push({
      //   uid: localStorage.getItem("uid"),
      //   category: category,
      //   options,
      //   style,
      //   price: price,
      //   status: 0,
      //   createdAt: year + "." + month + "." + date,
      //   endAt: "",
      // });
      // console.log(lists);
      // // const db = getFirestore();
      // const userDoc = doc(db, "users", myId);

      // //Update the review document

      // try {
      //   updateDoc(userDoc, {
      //     orderList: [...lists],
      //   });
      // } catch (error) {
      //   console.log(error);
      // }

      alert("주문되었습니다.");
    } catch (error) {
      console.error("Error updating document: ", error);
      alert("주문 안됨.");
    }
  };

  const updateOrderListInUser = async () => {
    try {
      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1; // 월
      let date = today.getDate();

      const myId: any = localStorage.getItem("uid");
      const orderLists = orderList?.filter(({ id }: any) => id === myId);
      const lists = [...orderLists[0]?.orderList];
      lists.push({
        uid: localStorage.getItem("uid"),
        category: category,
        options,
        style,
        price: price,
        status: 0,
        createdAt: year + "." + month + "." + date,
        endAt: "",
      });
      console.log(lists);
      const db = getFirestore();
      const userDoc = doc(db, "users", myId);

      //Update the review document

      updateDoc(userDoc, {
        orderList: [...lists],
      });

      console.log("유저테이블 변경 성공");
    } catch (error) {
      console.log("에러" + error);
    }
  };

  useEffect(() => {
    submitOrder();
  }, []);

  // useEffect(() => {
  //   if (isPost) {
  //     updateOrderListInUser();
  //     setIsPost(false);
  //   }
  // }, [orderList]);

  return (
    <S.OrderPageWrapper>
      <Nav />
      <S.Box>
        <OrderSuccessIc />
        <S.ButtonWrapper>
          <S.Button $isBlack={true} onClick={hanldeMoveToMypage}>
            마이페이지로 이동
          </S.Button>
          <S.Button $isBlack={false} onClick={hanldeMoveToHome}>
            홈으로 이동
          </S.Button>
        </S.ButtonWrapper>
      </S.Box>
    </S.OrderPageWrapper>
  );
}
