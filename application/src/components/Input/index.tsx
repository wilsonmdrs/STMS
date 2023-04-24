import React from "react";
import * as S from "./styles";

interface Props extends S.InputProps {}

export const Input: React.FC<Props> = (props) => {
  return <S.Input {...props} />;
};
