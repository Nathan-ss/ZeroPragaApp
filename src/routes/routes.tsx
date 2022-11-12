import React from "react";
import SettingsScreen from "../screens/settings/settings";
import HomeScreen from "../screens/home/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ButtonLoggin } from "../components/Header";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Globalstyles from "../styles/globalStyles";
import { LinearGradient } from "expo-linear-gradient";

export const Routes = () => {
  const Tab = createBottomTabNavigator();
  const [dataCam, setDataCam] = React.useState({
    color0: "#58A80F",
    color1: "#C1E105",
    icon: "white",
  });

  const cam = (
    <LinearGradient
      style={Globalstyles.iconTabRound}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={[dataCam.color0, dataCam.color1]}
    >
      <Ionicons name={"camera"} size={40} color={dataCam.icon} />
    </LinearGradient>
  );

  const screenRoutes = (
    <>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "#58A80F", color: "white" },
        }}
      />
      <Tab.Screen name="Loved" component={SettingsScreen} />
      <Tab.Screen
        name="Capturar Praga"
        component={SettingsScreen}
        options={() => ({
          tabBarIcon: ({}) => <View>{cam}</View>,
        })}
      />
      <Tab.Screen name="Login" component={SettingsScreen} />
    </>
  );

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "white" }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Ionicons
                name={focused ? "md-home-outline" : "md-home-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Loved") {
            return <Ionicons name="heart-outline" size={size} color={color} />;
          } else if (route.name === "Login") {
            return (
              <FontAwesome name="user-circle-o" size={size} color={color} />
            );
          }
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#58A80F",
      })}
    >
      {screenRoutes}
    </Tab.Navigator>
  );
};
