import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

import React from "react";

const ListItemnew = (props) => {
  let mycolor;
  props.activeId == props.id ? (mycolor = "#a6e3e9") : (mycolor = "#DDDD");
  return (
    <TouchableWithoutFeedback
      delayPressIn={0}
      delayPressOut={0}
      onPress={() => {
        const obj = { activeItem: props.itemName, activeId: props.id };
        props.click(obj);
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 7,
        }}
      >
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 15,
            backgroundColor: mycolor,
            marginRight: 20,
          }}
        ></View>
        <View>
          <Text style={{ fontSize: 18, fontFamily: "Sora-Regular" }}>
            {props.itemName}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemnew;

const styles = StyleSheet.create({});
