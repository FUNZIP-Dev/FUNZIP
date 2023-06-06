export interface StepProp {
  step: string;
}

export interface StepProps extends StepProp {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}
