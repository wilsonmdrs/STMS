import React from "react";
import { Wrapper } from "./styles";

interface Props {
  className?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  children: React.ReactNode;
}
export const Container: React.FC<Props> = ({
  className,
  flexDirection,
  alignItems,
  justifyContent,
  width,
  height,
  margin,
  padding,
  children,
}) => {
  return (
    <Wrapper
      {...{
        className,
        flexDirection,
        alignItems,
        width,
        height,
        margin,
        justifyContent,
        padding,
      }}
    >
      {children}
    </Wrapper>
  );
};
