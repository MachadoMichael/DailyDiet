import { useState } from "react";

import { Container, Label, TextInput } from "./styles";

type Props = {
  label: string;
  size: string;
  value: string;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export function Input({
  label,
  size = "BIG",
  value,
  setValue,
  placeholder,
}: Props) {
  const [focus, setFocus] = useState(false);

  return (
    <Container>
      <Label>{label}</Label>
      <TextInput
        value={value}
        size={size}
        focus={focus}
        placeholder={placeholder}
        onChangeText={(e) => setValue(e)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </Container>
  );
}
