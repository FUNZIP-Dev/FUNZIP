import { addDoc, collection, doc, getFirestore, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
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
  const [orderList, setOrderList] = useState<any>();
  const [isPost, setIsPost] = useState<boolean>(false);
  const [category, setCategory] = useRecoilState<string>(selectCategory);
  const [options, setOptions] = useRecoilState<SelectOptionTypes>(selectOptions);
  const [style, setStyle] = useRecoilState<orderStyleDataType>(orderStyle);
  const [price, setPrice] = useRecoilState<number>(orderMoney);

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

      if (confirm("주문이 완료되었습니다.")) {
        resetLogic();
      } else {
        resetLogic();
      }
    } catch (error) {
      console.error("Error updating document: ", error);
      resetLogic();
      alert("주문에 실패했습니다.");
    }
  };

  const resetLogic = () => {
    setCategory("");
    setOptions({
      basic: [],
      plus: [],
      cam: "",
    });
    setStyle({
      font: "Pretendard Medium",
      size: 10,
      textColor: "#000000",
      borderColor: "transparent",
      backgroundColor: "transparent",
      shadowColor: "transparent",
      mood: "",
      link: "",
      driveLink: "",
      time: "",
    });
    setPrice(0);
  };

  useEffect(() => {
    if (isPost) {
      updateOrderListInUser();
    }
  }, [orderList]);

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
      const orderLists = orderList?.filter(({ id }: any) => id === myId);

      const lists = [...orderLists[0]?.orderList];

      lists.push(postData);
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
