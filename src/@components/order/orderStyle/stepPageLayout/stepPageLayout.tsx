import * as S from "./style";

interface StepPageLayoutProps {
  children: any;
  num: number;
  title: string;
  sub: string;
}

export default function StepPageLayout(props: StepPageLayoutProps) {
  const { children, num, title, sub } = props;

  return (
    <S.StepWrapper>
      <S.Title>STEP {num}.</S.Title>
      <S.Title>{title}</S.Title>
      <S.Sub>{sub}</S.Sub>
      {children}
    </S.StepWrapper>
  );
}
