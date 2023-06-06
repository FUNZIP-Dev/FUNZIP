import { OrderOptionCheckIc } from "../../../assets";
import { BASIC_OPTIONS } from "../../../core/order/optionList";

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
    </>
  );
}
