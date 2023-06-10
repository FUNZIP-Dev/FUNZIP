interface MoodType {
  id: number;
  text: string;
}

export const MOOD: MoodType[] = [
  { id: 1, text: "빠르고 답답함 없이" },
  { id: 2, text: "보통 빠르기로 무난하게" },
  { id: 3, text: "느리고 여유롭게" },
];
