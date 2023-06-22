import React from 'react';
import * as S from "./style";

interface NodataProps {
  text: string;
}

export const Nodata: React.FC<NodataProps> = ({ text }) => {
  return (
    <S.NodataWrapper>
      <S.ErrorLogoBox/>
      {text}
    </S.NodataWrapper>
  );
};
