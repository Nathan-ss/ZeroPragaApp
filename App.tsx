import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes/routes";
import { Provider as PaperProvider } from "react-native-paper";

const theme = {
  colors: {
    primary: "#58A80F",
    secondary: "white",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
}
