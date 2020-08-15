import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useRef } from "react";

export default function BgMask(props) {
  return (
    <TouchableWithoutFeedback onPress={props.press}>
      <Animated.View
        style={{
          zIndex: 2,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.2)",
          position: "absolute",
          opacity: props.fade,
        }}
      ></Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
