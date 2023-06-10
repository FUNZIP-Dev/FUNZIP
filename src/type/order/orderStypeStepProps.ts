import { orderStyleDataType } from "./orderStyleData";

export interface OrderStyleStepProps {
  orderStyleData: orderStyleDataType;
  setOrderStyleData: React.Dispatch<React.SetStateAction<orderStyleDataType>>;
}
