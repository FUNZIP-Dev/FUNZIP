import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { OrderReceiptCheckIc } from "../../../assets";
import { AuthContext } from "../../../context/authContext";
import { orderMoney } from "../../../recoil/order/orderMoney";
import * as S from "./style";

export default function OrderMoney() {
  const [totalPrice, setTotalPrice] = useRecoilState<number>(orderMoney);
  const userInfo = useContext(AuthContext);
  const [userData, setUserData] = useState<any>([]);

  console.log(userInfo);

  useEffect(() => {
    const db = getFirestore();
    const userRef = collection(db, "users");
    const myId: any = localStorage.getItem("uid");

    const getUser = onSnapshot(userRef, (snapshot) => {
      const usersData: any[] = [];
      snapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUserData(usersData?.filter(({ id }: any) => id === myId));
    });

    // Clean up the listener
    return () => getUser();
  }, []);

  return (
    <S.TotalPriceWrapper>
      <S.PriceTitleWrapper>
        <OrderReceiptCheckIc />
        <S.Title>
          <S.UserName>{userData[0]?.displayName}</S.UserName>
          <S.Texts>님의 총 견적</S.Texts>
        </S.Title>
      </S.PriceTitleWrapper>
      <S.PriceWrapper>
        <S.Price>{totalPrice}</S.Price>
        <S.Won>원</S.Won>
      </S.PriceWrapper>
    </S.TotalPriceWrapper>
  );
}
