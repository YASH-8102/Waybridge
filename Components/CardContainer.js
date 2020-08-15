import { StyleSheet, Text, View } from "react-native";

import React from "react";

const CardContainer = (props) => {
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: props.color,
        elevation: 3,
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </View>
  );
};

export default CardContainer;

const styles = StyleSheet.create({});
