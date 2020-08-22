import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import { log } from "react-native-reanimated";

const SQLite = require("react-native-sqlite-storage");

export default function Record() {
  const db = SQLite.openDatabase(
    {
      name: "MyDB",
      location: "default",
      createFromLocation: 1,
    },
    () => {
      console.log("success");
    },
    (error) => {
      console.log(error);
    }
  );
  console.log({ yn: db });

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS MyData (Seller	VARCHAR(20) NOT NULL,Purchaser	VARCHAR(20) NOT NULL,Items	VARCHAR(20) NOT NULL,Vehicle	VARCHAR(20) NOT NULL,Gross	INTEGER NOT NULL,Tare	INTEGER NOT NULL,Net	INTEGER NOT NULL,Charge	INTEGER NOT NULL,Type	VARCHAR(20) NOT NULL,Cashior	VARCHAR(20) NOT NULL,Date	VARCHAR(20) NOT NULL,SrNo	INTEGER NOT NULL);",
        []
      );
    });
  }, []);
  // db.transaction((tx) => {
  //   console.log(tx);

  //   tx.executeSql(
  //     "SELECT name FROM YASH;",
  //     [],
  //     (tx, results) => {
  //       console.log("results");
  //       const rows = results.rows;
  //       let users = [];

  //       for (let i = 0; i < rows.length; i++) {
  //         users.push({
  //           ...rows.item(i),
  //         });
  //       }

  //       console.log(users);
  //       //this.setState({ users });
  //     },
  //     (e) => {
  //       console.log(e);
  //     }
  //   );
  // });

  return (
    <View>
      <Button
        title={"press"}
        onPress={() => {
          db.transaction(function (tx) {
            tx.executeSql(
              "INSERT INTO user (user_name) VALUES (?)",
              ["yash"],
              (tx, results) => {
                console.log("Results", results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    "Success",
                    "You are Registered Successfully",
                    [
                      {
                        text: "Ok",
                      },
                    ],
                    { cancelable: false }
                  );
                } else alert("Registration Failed");
              }
            );
          });
        }}
      />
      <Button
        title={"show user"}
        onPress={() => {
          db.transaction((tx) => {
            tx.executeSql("SELECT * FROM user;", [], (tx, results) => {
              const rows = results.rows;
              let users = [];

              for (let i = 0; i < rows.length; i++) {
                users.push({
                  ...rows.item(i),
                });
              }

              console.log(users);
              // this.setState({ users });
            });
          });
        }}
      />
      <Button
        title={"delete"}
        onPress={() => {
          db.transaction((txn) => {
            txn.executeSql("DROP TABLE IF EXISTS user", []);
          });
        }}
      />
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({});
