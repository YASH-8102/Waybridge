import { StyleSheet, Text, View } from "react-native";

import AnimatedButton from "./AnimatedButton";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const ListContainer = (props) => {
  return (
    <View style={{ marginHorizontal: 30, marginTop: 30 }}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Sora-Medium",
          }}
        >
          {props.title}
        </Text>
      </View>
      <ScrollView style={{ marginVertical: 10, maxHeight: "90%" }}>
        {props.children}
      </ScrollView>
    </View>
  );
};

export default ListContainer;

const styles = StyleSheet.create({});
