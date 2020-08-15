import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Record from "./Record";
import Home from "./Home";
import Settings from "./Settings";

const Tab = createBottomTabNavigator();
export default function Navigator() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={"Home"}
          tabBarOptions={{
            activeTintColor: "#fc5185",
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="home" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Records"
            component={Record}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="book" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="settings" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
