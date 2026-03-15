import type { FC } from "react";

export interface SilkProps {
  color?: string;
  speed?: number;
  backgroundColor?: string;
}

declare const Silk: FC<SilkProps>;
export default Silk;
