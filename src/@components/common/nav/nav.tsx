import { getAuth } from "firebase/auth";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ProfileDefaultIcon } from "../../../assets";
import { AuthContext } from "../../../context/authContext";
import { ORDER_STEP } from "../../../core/order/orderStep";
import { orderStyle } from "../../../recoil/order/fontStyle";
import { orderMoney } from "../../../recoil/order/orderMoney";
import { orderStep } from "../../../recoil/order/orderStep";
import { selectCategory } from "../../../recoil/order/selectCatogry";
import { selectOptions } from "../../../recoil/order/selectOptions";
import { orderStyleDataType } from "../../../type/order/orderStyleData";
import { SelectOptionTypes } from "../../order/orderOption/orderOption";
import * as S from "./style";

export default function Nav() {
  const userInfo = useContext(AuthContext);
  const navigate = useNavigate();
  const [isStaff, setIsStaff] = useState(false);
  const [step, setStep] = useRecoilState<string>(orderStep);
  const [category, setCategory] = useRecoilState<string>(selectCategory);
  const [options, setOptions] = useRecoilState<SelectOptionTypes>(selectOptions);
  const [style, setStyle] = useRecoilState<orderStyleDataType>(orderStyle);
  const [price, setPrice] = useRecoilState<number>(orderMoney);

  const handleMoveToPage = (route: string) => {
    navigate(route);
  };

  useEffect(() => {
    // Fetch user information from Firestore based on the uid
    if (userInfo) {
      const db = getFirestore();
      const auth = getAuth();
      const userRef = doc(collection(db, "users"), userInfo.uid);
      getDoc(userRef).then((doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          if (userData.staff != 0) {
            setIsStaff(true);
          }
        }
      });
    }
  }, [userInfo]);

  const handleMoveToOrder = () => {
    if (localStorage.getItem("tutorialOpen") === "false") {
      setStep(ORDER_STEP.CATEGORY);
    } else {
      setStep(ORDER_STEP.TUTORIAL);
    }
    navigate("/order");
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

  return (
    <S.NavBar>
      <S.NavLogoIcon onClick={() => handleMoveToPage("/")} />
      <S.Text onClick={() => handleMoveToPage("/")}>서비스 소개</S.Text>
      <S.Text onClick={handleMoveToOrder}>주문하기</S.Text>
      <S.Text onClick={() => handleMoveToPage("/tutorial")}>튜토리얼</S.Text>
      <S.Text onClick={() => handleMoveToPage("/faq")}>FAQ</S.Text>
      <S.Text onClick={() => handleMoveToPage("/review")}>후기</S.Text>
      {isStaff ? (
        <S.Text onClick={() => handleMoveToPage("/staff")}>관리자</S.Text>
      ) : (
        <>
          {userInfo ? (
            <S.ProfileImageWrapper onClick={() => handleMoveToPage("/mypage")}>
              <ProfileDefaultIcon />
            </S.ProfileImageWrapper>
          ) : (
            <S.Text onClick={() => handleMoveToPage("/login")}>로그인</S.Text>
          )}
        </>
      )}
    </S.NavBar>
  );
}
