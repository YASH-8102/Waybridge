import {
  Animated,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useRef } from "react";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const InputSelectBox = (props) => {
  const scalAnim = useRef(new Animated.Value(1)).current;

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          height: 65,
          borderRadius: 5,
          marginVertical: 5,
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
        style={{ zIndex: 5 }}
        useForeground={false}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View
          style={{
            height: 65,
            backgroundColor: "rgba(255, 255, 255,0.5)",
            borderRadius: 5,
            borderBottomWidth: 2,
            borderBottomColor: "rgba(0, 0, 0,0.3)",
            flexDirection: "row",
            paddingLeft: 20,
            zIndex: 5,
          }}
        >
          <View
            style={{
              width: "80%",
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                width: "100%",
                height: "30%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Sora-Bold",
                  color: "rgba(54, 79, 107,0.7)",
                }}
              >
                {props.title}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                height: "50%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Sora-Medium",
                  color: "rgba(0,0,0,0.4)",
                }}
              >
                {props.subtitle}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "20%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="arrow-drop-down" size={50} color={"#364f6b"} />
          </View>
        </View>
      </TouchableNativeFeedback>
    </Animated.View>
  );
};
export default InputSelectBox;

const styles = StyleSheet.create({});
