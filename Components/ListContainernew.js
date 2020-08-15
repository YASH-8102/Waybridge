import { StyleSheet, Text, View } from "react-native";

import AnimatedButton from "./AnimatedButton";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const ListContainernew = (props) => {
  return (
    <View style={{ marginHorizontal: 30 }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ marginVertical: 0, maxHeight: "100%" }}
      >
        {props.children}
      </ScrollView>
    </View>
  );
};

export default ListContainernew;

const styles = StyleSheet.create({});
