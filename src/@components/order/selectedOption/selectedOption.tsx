import { useRecoilValue } from "recoil";
import { USER } from "../../../core/user/user";
import { selectOptions } from "../../../recoil/order/selectOptions";
import { SelectOptionTypes } from "../orderOption/orderOption";
import * as S from "./style";

export default function SelectedOption() {
  const selectOption = useRecoilValue<SelectOptionTypes>(selectOptions);

  return (
    <S.SelectedOptionWraper>
      <S.Title>
        <S.UserName>{USER?.name}</S.UserName>님이 선택한 옵션
      </S.Title>
      <S.TagsWrapper>
        <S.TitleTags>
          <S.Tags>
            <S.Sub>기본옵션</S.Sub>
          </S.Tags>
          <S.Tags>
            <S.Sub>BGM & SFX</S.Sub>
          </S.Tags>
          <S.Tags>
            <S.Sub>원본 영상 촬영캠</S.Sub>
          </S.Tags>
        </S.TitleTags>
        <ul>
          <S.Tags>
            {selectOption?.basic?.map((basic) => (
              <S.Tag>{basic}</S.Tag>
            ))}
          </S.Tags>
          <S.Tags>
            {selectOption?.plus?.map((plus) => (
              <S.Tag>{plus}</S.Tag>
            ))}
          </S.Tags>
          <S.Tags>
            <S.Tag>{selectOption?.cam}</S.Tag>
          </S.Tags>
        </ul>
      </S.TagsWrapper>
    </S.SelectedOptionWraper>
  );
}
