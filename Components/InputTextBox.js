import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useRef } from "react";

export default InputTextBox = React.forwardRef((props, ref) => {
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
      <TouchableWithoutFeedback onPress={props.click}>
        <View
          style={{
            height: 65,
            backgroundColor: "rgba(255, 255, 255,0.5)",
            borderRadius: 5,
            borderBottomWidth: 2,
            borderBottomColor: "rgba(0, 0, 0,0.3)",
            flexDirection: "row",
            paddingLeft: 20,
          }}
        >
          <View
            style={{
              width: "100%",
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
              <TextInput
                value={props.Value}
                editable={props.editable}
                keyboardType={props.keyboardType}
                onChangeText={(e) => {
                  props.textHandler(e);
                }}
                ref={ref}
                onSubmitEditing={props.onSubmitEditing}
                blurOnSubmit={props.blurOnSubmit}
                returnKeyType={props.returnKeyType}
                placeholder={props.subtitle}
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: 16,
                  fontFamily: "Sora-Medium",
                  color: "rgba(54, 79, 107,0.7)",
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
});

const styles = StyleSheet.create({});
