import { MOOD } from "../../../../core/order/styleMood";

export default function Step2() {
  return (
    <>
      <h1>STEP 2.</h1>
      <h1>영상의 분위기를 선택해주세요.</h1>
      <p>컷편집 시, 화면 전환의 템포가 달라질 수 있어요!</p>
      {MOOD?.map(({ id, text }) => (
        <button key={id}>{text}</button>
      ))}
    </>
  );
}
