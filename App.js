import { StatusBar, StyleSheet } from "react-native";

import Navigator from "./Screens/Navigator";
import React from "react";

const App = () => {
  StatusBar.setBackgroundColor("rgba(255,255,255,0.2)");
  StatusBar.setTranslucent(false);
  return (
    <>
      <StatusBar animated={true} barStyle="dark-content" />
      <Navigator />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
