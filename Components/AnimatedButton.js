import {
  Animated,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import React, { useRef } from "react";

import MyAnimation from "../Assets/Animations";
import Values from "../Assets/shortcut";

export default function AnimatedButton(props) {
  const scalAnim = useRef(new Animated.Value(1)).current;

  return (
    <Animated.View
      style={[
        {
          width: props.width ? props.width : 200,
          height: props.height ? props.height : 50,
          borderRadius: props.height ? props.height / 2 : 25,
          backgroundColor: props.color ? props.color : "#FFFFFF",
          marginVertical: 10,
          elevation: 3,
        },
        {
          transform: [
            {
              scale: scalAnim,
            },
          ],
        },
      ]}
    >
      <TouchableNativeFeedback
        delayPressIn={0}
        delayPressOut={0}
        onPress={props.click}
        useForeground={false}
        background={TouchableNativeFeedback.Ripple(props.ripple, true)}
      >
        <View
          style={{
            height: props.height ? props.height : 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Sora-Regular",
              fontSize: 18,
              color: props.textcolor,
              textAlign: "center",
            }}
          >
            {props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
