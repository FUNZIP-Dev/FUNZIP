interface OptionType {
  id: number;
  title: string;
  content: string;
}

export const BASIC_OPTIONS: OptionType[] = [
  { id: 1, title: "컷 편집", content: "펀집이 가장 자신있는 대표 서비스" },
  { id: 2, title: "자막 추가", content: "없으면 심심한 가장 기본적인 자막" },
  { id: 3, title: "스타일 자막(오픈 준비 중)", content: "영상에 재미를 더해주는 스타일 자막" },
];

export const PLUS_OPTIONS: OptionType[] = [
  { id: 1, title: "선택 안함", content: "" },
  { id: 2, title: "BGM", content: "분위기를 극대화 시켜주는 배경음악" },
  { id: 3, title: "SFX", content: "영상에 생동감을 불어넣는 특수 효과" },
];

export const CAM_OPTIONS: OptionType[] = [
  { id: 1, title: "싱글 캠", content: "카메라 한 대로 촬영한 경우" },
  { id: 2, title: "멀티 캠", content: "여러 카메라로 여러 각도에서 촬영한 경우" },
];
