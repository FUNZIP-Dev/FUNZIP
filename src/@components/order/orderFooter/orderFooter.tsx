import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { RequestPayParams, RequestPayResponse } from "../../../@pages/payment/type";
import { OrderNextBtnIc, OrderPreviousBtnIc, OrderSuccessBtnIc } from "../../../assets";
import { ORDER_STEP } from "../../../core/order/orderStep";
import { orderStyle } from "../../../recoil/order/fontStyle";
import { moveNextPage } from "../../../recoil/order/moveNextPage";
import { orderMoney } from "../../../recoil/order/orderMoney";
import { selectCategory } from "../../../recoil/order/selectCatogry";
import { selectOptions } from "../../../recoil/order/selectOptions";
import { orderStyleDataType } from "../../../type/order/orderStyleData";
import { StepProps } from "../../../type/order/stepProps";
import { SelectOptionTypes } from "../orderOption/orderOption";
import * as S from "./style";

export default function OrderFooter(props: StepProps) {
  const { step, setStep } = props;
  const [isNext, setIsNext] = useRecoilState(moveNextPage);
  const [orderStyleData, setOrderStyleData] = useRecoilState<orderStyleDataType>(orderStyle);
  const navigate = useNavigate();
  const category = useRecoilValue<string>(selectCategory);
  const options = useRecoilValue<SelectOptionTypes>(selectOptions);
  const style = useRecoilValue<orderStyleDataType>(orderStyle);
  const price = useRecoilValue<number>(orderMoney);

  const checkStep = () => {
    return step !== "";
  };

  const checkFinalStep = () => {
    return step === ORDER_STEP.BUY;
  };

  const handelMoveToPrev = () => {
    switch (step) {
      case ORDER_STEP.OPTION:
        setStep(ORDER_STEP.CATEGORY);
        break;
      case ORDER_STEP.STYLE:
        setStep(ORDER_STEP.OPTION);
        break;
      case ORDER_STEP.BUY:
        setStep(ORDER_STEP.STYLE);
        break;
      default:
        setStep("");
        break;
    }
  };

  const handelMoveToNext = () => {
    if (step === ORDER_STEP.STYLE && (orderStyleData.driveLink === "" || orderStyleData.link === "")) {
      alert("링크를 입력해주세요");
    }
    if (isNext) {
      switch (step) {
        case ORDER_STEP.CATEGORY:
          setStep(ORDER_STEP.OPTION);
          break;
        case ORDER_STEP.OPTION:
          setStep(ORDER_STEP.STYLE);
          break;
        case ORDER_STEP.STYLE:
          if (orderStyleData.link !== "" && orderStyleData.driveLink !== "") {
            setStep(ORDER_STEP.BUY);
          }
          break;
        default:
          //결제페이지로 이동
          // navigate("/payment");
          //navigate("/order-success");
          break;
      }
      setIsNext(false);
    }
  };

  const checkIsTutorialExist = () => {
    return localStorage.getItem("tutorialOpen") === "false" && step === ORDER_STEP.CATEGORY;
  };

  const IMP = window.IMP; // 생략 가능
  IMP?.init("imp44561238"); // 가맹점

  const amount = 100;

  const handlePayment = () => {
    window.IMP?.init("iamport");
    if (!amount) {
      alert("결제 금액을 확인해주세요");
      return;
    }
    const data: RequestPayParams = {
      pg: "html5_inicis",
      pay_method: "card",
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: amount,
      buyer_tel: "00-000-0000",
    };
    const callback = (response: RequestPayResponse) => {
      const { success, merchant_uid, error_msg, imp_uid, error_code } = response;
      if (success) {
        //결제 성공 시 로직
        navigate("/order-success");
        // console.log(response);
      } else {
        //결제 실패 시 로직
        navigate("/order-fail");
        // console.log(response);
      }
    };
    window.IMP?.request_pay(data, callback);
  };

  return (
    <>
      {checkStep() && (
        <S.ButtonWrapper>
          {!checkIsTutorialExist() ? (
            <S.PreviousButton onClick={handelMoveToPrev}>
              <OrderPreviousBtnIc />
            </S.PreviousButton>
          ) : (
            <EmpthyBtn />
          )}
          <S.NextButton>
            {!checkFinalStep() ? (
              <OrderNextBtnIc onClick={handelMoveToNext} />
            ) : (
              <OrderSuccessBtnIc onClick={handlePayment} />
            )}
          </S.NextButton>
        </S.ButtonWrapper>
      )}
    </>
  );
}

const EmpthyBtn = styled.div`
  width: 209px;
  height: 128px;
`;
