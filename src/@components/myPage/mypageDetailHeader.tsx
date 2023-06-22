import { BackIcon } from '../../assets';
import * as S from "./style";
import { useNavigate } from 'react-router-dom';

interface MypageDetailHeaderProps {
  title: string;
}

export default function MypageDetailHeader({ title }: MypageDetailHeaderProps) {
  const navigate = useNavigate();

  return (
    <>
      <S.ListHeaderContainer>
        <BackIcon style={{ cursor: 'pointer' }} onClick={() => { navigate(-1) }} />
        <S.ListHeaderText>
          {title}
        </S.ListHeaderText>
      </S.ListHeaderContainer>
    </>
  )
}
