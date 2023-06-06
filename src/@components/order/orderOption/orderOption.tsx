import { OrderOptionCheckIc } from "../../../assets";
import { BASIC_OPTIONS, CAM_OPTIONS, PLUS_OPTIONS } from "../../../core/order/optionList";

export default function OrderOption() {
  return (
    <>
      <h1>기본 옵션</h1>
      {BASIC_OPTIONS.map(({ id, title, content }) => (
        <article key={id}>
          <OrderOptionCheckIc />
          <p>{title}</p>
          <p>{content}</p>
        </article>
      ))}
      <h1>BGM & SFX</h1>
      {PLUS_OPTIONS.map(({ id, title, content }) => (
        <article key={id}>
          <OrderOptionCheckIc />
          <p>{title}</p>
          <p>{content}</p>
        </article>
      ))}
      <h1>원본 영상 촬영캠</h1>
      {CAM_OPTIONS.map(({ id, title, content }) => (
        <article key={id}>
          <OrderOptionCheckIc />
          <p>{title}</p>
          <p>{content}</p>
        </article>
      ))}
    </>
  );
}
