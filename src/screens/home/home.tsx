import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Content } from "./components/content";
import Globalstyles from "../../styles/globalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={Globalstyles.global}>
      <ScrollView>
        <Content />
      </ScrollView>
    </SafeAreaView>
  );
}
