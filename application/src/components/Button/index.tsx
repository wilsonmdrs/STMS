import React from "react";
import * as S from "./styles";
interface Props {
  children: React.ReactNode;
  backgroundColor?: string;
  size?: number;
  color?: string;
  onClick(): void;
}

export const Button: React.FC<Props> = ({
  children,
  size,
  backgroundColor,
  color,
  ...props
}) => {
  return (
    <S.Button {...{ size, backgroundColor, color, ...props }}>
      {children}
    </S.Button>
  );
};
