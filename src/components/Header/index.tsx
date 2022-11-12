import React from "react";
import { Stack, Avatar, HStack } from "@react-native-material/core";

import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native-paper";

export const ButtonLoggin = () => {
  return (
    <View
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 2,
      }}
    >
      <Button
        mode="text"
        onPress={() => console.log("Pressed")}
        contentStyle={{
          display: "flex",
          shadowColor: "black",
          justifyContent: "center",
          alignItems: "center",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          backgroundColor: "white",
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          paddingStart: 15,
          padding: 2,
          borderRadius: 100,
        }}
      >
        <Text style={{ color: "#58A80F" }}>Entrar</Text>
        <FontAwesome name="user-circle-o" size={25} color="#58A80F" />
      </Button>
    </View>
  );
};
