import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Header = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 30,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Sora-Medium",
            color: "rgba(54, 79, 107,1)",
          }}
        >
          Serial No. : 1236
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Sora-Medium",
            color: "rgba(54, 79, 107,1)",
          }}
        >
          {` Date : ${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} `}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
