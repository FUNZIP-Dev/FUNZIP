import { useRecoilValue } from "recoil";
import { USER } from "../../../core/user/user";
import { selectOptions } from "../../../recoil/order/selectOptions";
import { SelectOptionTypes } from "../orderOption/orderOption";

export default function SelectedOption() {
  const selectOption = useRecoilValue<SelectOptionTypes>(selectOptions);

  console.log(selectOption);
  return (
    <>
      <h1>
        <strong>{USER?.name}</strong>님이 선택한 옵션
      </h1>
      <p>기본옵션</p>
      {/* {selectOption.basic.map((basic) => (
        <div>{BASIC_OPTIONS[basic]?.title}</div>
      ))}
      <p>BGM & SFX</p>
      {selectOption.plus.map((plus) => (
        <div>{PLUS_OPTIONS[plus]?.title}</div>
      ))}
      <p>원본 영상 촬영캠</p>
      {CAM_OPTIONS[selectOption.cam]?.title} */}
    </>
  );
}
