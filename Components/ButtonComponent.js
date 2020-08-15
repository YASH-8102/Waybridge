import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import React from "react";
import SettingBtn from "./pause.svg";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const BtnComp = () => {
  return (
    <View style={styles.buttonView}>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("helo");
        }}
      >
        <View style={{ backgroundColor: "red", width: 100 }}>
          <SettingBtn width={100} height={100} />
        </View>
      </TouchableWithoutFeedback>
      {/* 
            <TouchableWithNativeFeedback onPress={() => console.log('SETTINGS PRESSED')}>
                <View style={[styles.btn, { left: '12%' }]}>

                    <SettingBtn style={{ marginTop: 10 }} width={85} height={85} />
                </View>
            </TouchableWithNativeFeedback>

            <TouchableWithNativeFeedback onPress={() => console.log('RELOAD PRESSED')}>
                <View style={[styles.btn, { left: '40%' }]}>
                    <ReloadBtn style={{ marginTop: 10 }} width={85} height={85} />
                </View>
            </TouchableWithNativeFeedback>

            <TouchableWithNativeFeedback onPress={() => console.log('THEME PRESSED')}>
                <View style={[styles.btn, { left: '68%' }]}>
                    <ThemeBtn style={{ marginTop: 10 }} width={85} height={85} />
                </View>
            </TouchableWithNativeFeedback> */}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: "white",
    // flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // height: (height * 0.2),
    // top: -(height * 0.35),
  },
  btn: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",

    // height: '100%',
    //  width: '20%',
    opacity: 0.5,
  },
});

export default BtnComp;
