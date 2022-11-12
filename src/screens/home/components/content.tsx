import React from "react";
import { Text } from "react-native";
import Globalstyles from "../../../styles/globalStyles";
import { Input } from "./input";

export const Content = () => {
  return (
    <>
      <Text style={Globalstyles.title}>Saiba Como Cuidar da Sua Plantinha</Text>
      <Input />
    </>
  );
};
