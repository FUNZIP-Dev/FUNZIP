import { addDoc, collection, doc, getFirestore, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [isPost, setIsPost] = useState<boolean>(false);
  // const [searchParams] = useSearchParams();

  const hanldeMoveToMypage = () => {
    navigate("/mypage");
  };

  const hanldeMoveToHome = () => {
    navigate("/");
  };

  // order테이블에 post
  const submitOrder = async () => {
    try {
      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1; // 월
      let date = today.getDate();

      const postData = {
        uid: localStorage.getItem("uid"),
        category: category,
        options,
        style,
        price: price,
        status: 0,
        createdAt: year + "." + month + "." + date,
        endAt: "",
      };
      const db = getFirestore();

      const orderRef = collection(db, "order");
      await addDoc(orderRef, postData);

      const userRef = collection(db, "users");
      const userDatas: any[] = [];

      const myId: any = localStorage.getItem("uid");

      onSnapshot(userRef, (snapshot: any) => {
        snapshot.forEach((doc: any) => {
          userDatas.push({ id: doc.id, ...doc.data() });
        });
        setOrderList(userDatas);
        setIsPost(true);
      });

      alert("주문이 완료되었습니다.");
    } catch (error) {
      console.error("Error updating document: ", error);
      alert("주문에 실패했습니다.");
    }
  };

  useEffect(() => {
    if (isPost) {
      console.log("들어옴");
      updateOrderListInUser();
    }
  }, [orderList]);

  // console.log(orderList);

  // 유저 테이블에도 Post해주기
  const updateOrderListInUser = async () => {
    try {
      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1; // 월
      let date = today.getDate();

      const postData = {
        uid: localStorage.getItem("uid"),
        category: category,
        options,
        style,
        price: price,
        status: 0,
        createdAt: year + "." + month + "." + date,
        endAt: "",
      };
      const myId: any = localStorage.getItem("uid");
      // console.log(orderList);
      const orderLists = orderList?.filter(({ id }: any) => id === myId);
      // console.log(orderLists[0]);
      const lists = [...orderLists[0]?.orderList];
      // console.log(lists);
      lists.push(postData);
      // console.log(lists);
      const db = getFirestore();
      const userDoc = doc(db, "users", myId);

      //Update the review document

      await updateDoc(userDoc, {
        orderList: [...lists],
      });
    } catch (error) {
      console.log("에러" + error);
    }
  };

  useEffect(() => {
    submitOrder();
  }, []);

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
