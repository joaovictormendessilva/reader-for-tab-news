import { ReactNode } from "react";

type RepeatProps = {
  count: number;
  children: (index: number) => ReactNode;
};

export function Repeat({ count, children }: RepeatProps) {
  return <>{Array.from({ length: count }, (_, index) => children(index))}</>;
}
