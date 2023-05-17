import * as React from "react";
import { ButtonStyle } from "./styles";

export default function Button({ children }: React.HTMLProps<HTMLButtonElement>) {
  return (
    <ButtonStyle>{children}</ButtonStyle>
  );
}
