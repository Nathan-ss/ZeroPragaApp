import React from "react";
import { View, Text } from "react-native";
import Globalstyles from "../../../styles/globalStyles";
import { Button, TextInput } from "react-native-paper";

export const Input = () => {
  const [text, setText] = React.useState("");

  return (
    <>
      <View style={{ display: "flex", marginTop: 10 }}>
        <TextInput
          label="Pesquise uma Planta"
          mode="flat"
          onChangeText={(text) => setText(text)}
          style={{ backgroundColor: "#f6f6f6", borderRadius: 5 }}
          left={<TextInput.Icon icon="magnify" />}
        />
      </View>
    </>
  );
};
