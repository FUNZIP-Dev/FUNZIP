import { useRecoilValue } from "recoil";
import { USER } from "../../../core/user/user";
import { selectOptions } from "../../../recoil/order/selectOptions";
import { SelectOptionTypes } from "../orderOption/orderOption";
import * as S from "./style";

export default function SelectedOption() {
  const selectOption = useRecoilValue<SelectOptionTypes>(selectOptions);

  return (
    <>
      <S.Title>
        <S.UserName>{USER?.name}</S.UserName>님이 선택한 옵션
      </S.Title>
      <p>기본옵션</p>
      {selectOption?.basic?.map((basic) => (
        <div>{basic}</div>
      ))}
      <p>BGM & SFX</p>
      {selectOption?.plus?.map((plus) => (
        <div>{plus}</div>
      ))}
      <p>원본 영상 촬영캠</p>
      {selectOption?.cam}
    </>
  );
}
