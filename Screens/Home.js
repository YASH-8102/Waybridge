import "react-native-get-random-values";

import {
  ActivityIndicator,
  Animated,
  Button,
  Dimensions,
  Easing,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { createRef, useEffect, useRef, useState } from "react";

import AnimatedButton from "../Components/AnimatedButton";
import BgMask from "../Components/BgMask";
import CardContainer from "../Components/CardContainer";
import Header from "../Components/Header";
import InputSelectBox from "../Components/InputSelectBox";
import InputTextBox from "../Components/InputTextBox";
import ListContainer from "../Components/ListContainer";
import ListContainernew from "../Components/ListContainernew";
import ListItem from "../Components/ListItem";
import ListItemnew from "../Components/ListItemnew";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { v1 as uuidv1 } from "uuid";

const Items = [
  { name: "Bhangar", id: uuidv1() },
  { name: "Bhuki", id: uuidv1() },
  { name: "BID", id: uuidv1() },
  { name: "BAR", id: uuidv1() },
  { name: "BUNDLE", id: uuidv1() },
  { name: "CAPLINE", id: uuidv1() },
  { name: "CASTING", id: uuidv1() },
  { name: "CHOL", id: uuidv1() },
  { name: "CAPLINE", id: uuidv1() },
  { name: "CASTING", id: uuidv1() },
  { name: "CHOL", id: uuidv1() },
  { name: "CAPLINE", id: uuidv1() },
  { name: "CASTING", id: uuidv1() },
  { name: "CHOL", id: uuidv1() },
];
const Vehicles = [
  { name: "DIPAL", id: uuidv1() },
  { name: "GJ 10T 237", id: uuidv1() },
  { name: "GJ 3AU 5078", id: uuidv1() },
  { name: "GJ 3AU 6574", id: uuidv1() },
  { name: "GJ 3AV 2974", id: uuidv1() },
  { name: "GJ 3AX 1856", id: uuidv1() },
  { name: "GJ 3AX 5656", id: uuidv1() },

  { name: "GJ 3AX 1922", id: uuidv1() },
];
const Charges = [
  { name: "10", id: uuidv1() },
  { name: "20", id: uuidv1() },
  { name: "30", id: uuidv1() },
];
const Types = [
  { name: "Cash", id: uuidv1() },
  { name: "Baki", id: uuidv1() },
  { name: "Yash", id: uuidv1() },
  { name: "Umang", id: uuidv1() },
];
const Cashiors = [
  { name: "NimeshBhai", id: uuidv1() },
  { name: "ManidhBhai", id: uuidv1() },
  { name: "PrafulBhai", id: uuidv1() },
];
export default function Home() {
  const windowHeight = Dimensions.get("window").height;

  //States
  const [seller, setSeller] = useState("");
  const [Purchaser, setPurchaser] = useState("");
  const [items, setitems] = useState("");
  const [Vehicle, setVehicle] = useState("");
  const [Gross, setGross] = useState("");
  const [Tare, setTare] = useState("");
  const [Net, setNet] = useState(0);
  const [Charge, setCharge] = useState(0);
  const [Type, setType] = useState("");
  const [Cashior, setCashior] = useState("");

  const [ScrollRef, setScrollRef] = useState(null);
  const [modelVisible, setmodelVisible] = useState(false);
  const [activeId, setactiveId] = useState(null);
  const [popupList, setpopupList] = useState(null);
  const [activeTab, setactiveTab] = useState();
  const [dataModel, setdataModel] = useState(false);
  const [dropItems, setdropItems] = useState(Items);
  const [dropList, setdropList] = useState(null);
  const [searchValue, setsearchValue] = useState("");

  //Refs
  const ref1 = createRef();
  const ref2 = createRef();
  const newref = createRef();
  const Grossref = createRef();
  const Tareref = createRef();

  //Animation Refs
  const upanim = useRef(new Animated.Value(0)).current;
  const down = useRef(new Animated.Value(-60)).current;
  const fade = useRef(new Animated.Value(0)).current;

  const sellerHandler = (e) => {
    setSeller(e);
  };
  const purchaserHandler = (e) => {
    setPurchaser(e);
  };

  const grossHandler = (e) => {
    e == "" || parseInt(e) == NaN ? (e = 0) : (e = parseInt(e));
    e = parseInt(e);
    setGross(e);
  };
  const tareHandler = (e) => {
    e == "" || parseInt(e) == NaN ? (e = 0) : (e = parseInt(e));
    setTare(e);
  };
  const netHandler = (e) => {
    if (Gross == "" || Tare == "") {
      setNet(0);
    } else {
      setNet(parseInt(Gross) - parseInt(Tare));
    }
  };

  const getData = () => {
    const obj = {
      Seller: seller,
      Purchaser: Purchaser,
      Item: items,
      Vehicle: Vehicle,
      Gross: Gross,
      Tare: Tare,
      Net: Net,
      Charge: Charge,
      Type: Type,
      Cashior: Cashior,
    };
    return obj;
  };

  const onSubmitCheck = () => {
    const obj = {
      Seller: seller,
      Purchaser: Purchaser,
      Item: items,
      Vehicles: Vehicle,
      Gross: Gross,
      Tare: Tare,
      Net: Net,
      Charges: Charge,
      Types: Type,
      Cashior: Cashior,
    };
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        console.log(element);
        if (!element) {
          console.log(key);

          setactiveTab(key);
          return;
        }
      }
    }
  };
  const setStates = ({ activeItem }) => {
    switch (activeTab) {
      case "Items":
        setitems(activeItem);

        if (
          !Items.find((e) => {
            return e.name === activeItem;
          })
        ) {
          Items.push({ id: uuidv1(), name: activeItem });
        }
        break;
      case "Vehicles":
        setVehicle(activeItem);
        if (
          !Vehicles.find((e) => {
            return e.name === activeItem;
          })
        ) {
          Vehicles.push({ id: uuidv1(), name: activeItem });
        }
        break;

      case "Charges":
        setCharge(activeItem);
        break;
      case "Types":
        setType(activeItem);
        if (
          !Types.find((e) => {
            return e.name === activeItem;
          })
        ) {
          Types.push({ id: uuidv1(), name: activeItem });
        }
        break;
      case "Cashior":
        setCashior(activeItem);
        break;

      default:
        break;
    }
  };
  const resetall = () => {
    setitems("Select-one");
    setVehicle("Select-one");
    setType("Select-one");
    setCashior("Select-one");
    setPurchaser("");
    setSeller("");
    setGross("");
    setTare("");
    setNet(0);
    setCharge(0);
  };

  const JumpToNext = () => {
    switch (activeTab) {
      case "Items":
        setactiveTab("Vehicles");
        setsearchValue("");
        break;
      case "Vehicles":
        setactiveTab("Gross");
        setsearchValue("");
        break;

      case "Charges":
        setpopupList(null);
        stopAnim();
        setactiveTab("Types");
        break;
      case "Types":
        stoptopAnim();
        setactiveTab("Cashior");

        break;
      case "Cashior":
        setpopupList(null);
        stopAnim();
        setactiveTab(null);
        break;

      default:
        break;
    }
  };

  //effect when active tab changes
  useEffect(() => {
    console.log(activeTab);
    switch (activeTab) {
      case "Seller":
        ScrollRef.scrollTo({ y: 0, animated: true });
        ref1.current.focus();
        break;

      case "Purchaser":
        ScrollRef.scrollTo({ y: 0, animated: true });
        ref2.current.focus();
        break;
      case "Items":
        ScrollRef.scrollTo({ y: 0, animated: true });
        topAnim();
        setdropItems(Items);
        setdropList(Items);
        break;
      case "Vehicles":
        ScrollRef.scrollTo({ y: 0, animated: true });
        topAnim();
        setdropItems(Vehicles);
        setdropList(Vehicles);
        break;
      case "Gross":
        stoptopAnim();
        Grossref.current.focus();
        break;

      case "Tare":
        ScrollRef.scrollTo({ y: 240, animated: true });
        Tareref.current.focus();
        break;

      case "Charges":
        ScrollRef.scrollTo({ y: 240, animated: true });
        startAnim();
        setpopupList(Charges);
        break;
      case "Types":
        ScrollRef.scrollTo({ y: 240, animated: true });
        topAnim();
        setdropItems(Types);
        setdropList(Types);

        break;
      case "Cashior":
        ScrollRef.scrollTo({ y: 240, animated: true });
        setpopupList(Cashiors);
        startAnim();

        break;

      default:
        break;
    }
  }, [activeTab, modelVisible]);

  useEffect(() => {
    netHandler();
  }, [Gross, Tare]);

  //SearchBAr Animation
  const topAnim = () => {
    newref.current.focus();
    StatusBar.setBackgroundColor("rgba(166, 227, 233,0.7)");
    setmodelVisible(true);

    Animated.parallel([
      Animated.timing(down, {
        toValue: windowHeight * 0.6,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.bezier(0.87, 0, 0.13, 1),
      }),
      Animated.timing(fade, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const stoptopAnim = () => {
    setactiveTab("");
    newref.current.blur();
    StatusBar.setBackgroundColor("rgba(255,255,255,0.2)");
    setsearchValue("");
    Animated.parallel([
      Animated.timing(down, {
        toValue: -60,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.bezier(0.87, 0, 0.13, 1),
      }),
    ]).start(() => {
      setmodelVisible(false);
    });
  };

  //Bottom to up animation
  const startAnim = () => {
    setmodelVisible(true);
    Animated.parallel([
      Animated.timing(upanim, {
        toValue: -windowHeight * 0.6,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fade, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const stopAnim = () => {
    setpopupList(null);
    setactiveTab("");

    Animated.parallel([
      Animated.timing(fade, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(upanim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setmodelVisible(false);
    });
  };

  return (
    <>
      <Modal transparent={true} animationType={"fade"} visible={dataModel}>
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: "80%",
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{`Seller : ${getData().Seller}`}</Text>
            <Text>{`Purchaser : ${getData().Purchaser}`}</Text>
            <Text>{`Item : ${getData().Item}`}</Text>
            <Text>{`Vehicle : ${getData().Vehicle}`}</Text>
            <Text>{`Gross : ${getData().Gross}`}</Text>
            <Text>{`Tare : ${getData().Tare}`}</Text>
            <Text>{`Net : ${getData().Net}`}</Text>
            <Text>{`Charge : ${getData().Charge}`}</Text>
            <Text>{`Type : ${getData().Type}`}</Text>
            <Text>{`Cashior : ${getData().Cashior}`}</Text>
            <Button
              title={"close"}
              onPress={() => {
                resetall();
                setdataModel(false);
              }}
            />
          </View>
        </View>
      </Modal>
      {modelVisible ? (
        <BgMask
          fade={fade}
          press={() => {
            stopAnim();
            stoptopAnim();
          }}
        />
      ) : null}

      {/* Bottom animated view */}
      <Animated.View
        style={{
          position: "absolute",
          width: "100%",
          height: windowHeight * 0.6,
          bottom: -windowHeight * 0.6,
          zIndex: 500,
          backgroundColor: "rgba(255,255,255,1)",
          transform: [{ translateY: upanim }],
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          elevation: 10,
        }}
      >
        {popupList ? (
          <View style={{ justifyContent: "space-between", height: "100%" }}>
            <View style={{ maxHeight: windowHeight * 0.6 * 0.8 }}>
              <ListContainer title={activeTab}>
                {popupList.map(({ name, id }) => {
                  return (
                    <ListItem
                      itemName={name}
                      activeId={activeId}
                      id={id}
                      key={id}
                      click={(obj) => {
                        console.log(obj);
                        setStates(obj);
                        setactiveId(obj.activeId);
                      }}
                    />
                  );
                })}
              </ListContainer>
            </View>

            <View
              style={{
                width: "100%",
                marginVertical: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AnimatedButton
                click={() => {
                  setpopupList(null);
                  console.log(activeTab);
                  JumpToNext();
                }}
                color={"#a6e3e9"}
                title={"Next"}
              />
            </View>
          </View>
        ) : (
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size={"large"} color={"#a6e3e9"} />
          </View>
        )}
      </Animated.View>

      {/* Top animated view */}
      <Animated.View
        style={{
          position: "absolute",
          width: "100%",
          height: windowHeight * 0.57,
          top: -windowHeight * 0.6,
          zIndex: 500,
          backgroundColor: "rgba(255,255,255,1)",
          transform: [{ translateY: down }],
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
          elevation: 10,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "80%",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              height: 55,
              backgroundColor: "#a6e3e9",
              marginHorizontal: 0,
              paddingHorizontal: 30,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              // borderColor: "rgba(0,0,0,0.1)",
              // borderWidth: 1,
              // borderRadius: 10,
            }}
          >
            <MaterialIcons name="search" size={25} color={"#000"} />
            <TextInput
              value={searchValue.toString()}
              onSubmitEditing={() => {
                setdropItems([]);
                setmodelVisible(true);
                JumpToNext();
                setsearchValue("");
              }}
              placeholder={"Search Items"}
              onChangeText={(e) => {
                setsearchValue(e);
                if (e === "") {
                  setdropItems(dropList);
                } else {
                  let yn = [...dropList].filter((i) => {
                    return (
                      i.name.toLowerCase().startsWith(e.toLowerCase()) ||
                      i.name.toLowerCase().includes(e.toLowerCase())
                    );
                  });
                  console.log(yn);
                  if (yn.length == 0) {
                    setdropItems([{ id: uuidv1(), name: e }]);
                  } else {
                    setdropItems(yn);
                  }
                }
              }}
              ref={newref}
              style={{
                fontFamily: "Sora-Regular",

                width: "80%",
                color: "black",
              }}
            />
            <TouchableWithoutFeedback
              onPress={() => {
                newref.current.blur();
                stoptopAnim();
                setactiveTab(null);
              }}
            >
              <MaterialIcons name="close" size={25} color={"#000"} />
            </TouchableWithoutFeedback>
          </View>

          {dropItems ? (
            <View
              style={{
                paddingTop: 10,
                height: "85%",
              }}
            >
              <ListContainernew title={activeTab}>
                {dropItems.map(({ name, id }) => {
                  return (
                    <ListItemnew
                      itemName={name}
                      activeId={activeId}
                      id={id}
                      key={id}
                      click={(obj) => {
                        console.log(obj);
                        setStates(obj);
                        setactiveId(obj.activeId);
                      }}
                    />
                  );
                })}
              </ListContainernew>
            </View>
          ) : (
            <View
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size={"large"} color={"#a6e3e9"} />
            </View>
          )}
        </View>

        <View
          style={{
            width: "100%",
            height: "20%",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AnimatedButton
            height={50}
            width={300}
            click={() => {
              setdropItems([]);
              setmodelVisible(true);
              JumpToNext();
            }}
            color={"#a6e3e9"}
            title={"Next"}
          />
        </View>
      </Animated.View>

      {/* Main Container view */}
      <ScrollView
        ref={(scroller) => {
          setScrollRef(scroller);
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#f5f5f5",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Header />

          <CardContainer color={"#a6e3e9"}>
            <InputTextBox
              Value={seller}
              textHandler={sellerHandler}
              returnKeyType={"next"}
              blurOnSubmit={false}
              title="Seller"
              subtitle={"Enter Name"}
              ref={ref1}
              onSubmitEditing={() => {
                ref2.current.focus();
              }}
            />
            <InputTextBox
              empty={true}
              Value={Purchaser}
              textHandler={purchaserHandler}
              title="purchaser"
              subtitle={"Enter Name"}
              ref={ref2}
              onSubmitEditing={() => {
                setactiveTab("Items");
              }}
            />
            <InputSelectBox
              click={() => {
                setactiveTab("Items");
              }}
              title="Items"
              subtitle={items ? items : "Select-One"}
            />
            <InputSelectBox
              click={() => {
                setactiveTab("Vehicles");
              }}
              title="Vehicle-name"
              subtitle={Vehicle ? Vehicle : "Select-One"}
            />
          </CardContainer>

          <CardContainer color={"#bbded6"}>
            <InputTextBox
              Value={Gross.toString()}
              keyboardType={"numeric"}
              textHandler={grossHandler}
              title="Gross"
              subtitle={"0"}
              returnKeyType={"next"}
              blurOnSubmit={false}
              ref={Grossref}
              onSubmitEditing={() => {
                ScrollRef.scrollTo({ y: 240, animated: true });
                Tareref.current.focus();
              }}
            />
            <InputTextBox
              Value={Tare.toString()}
              keyboardType={"numeric"}
              textHandler={tareHandler}
              title="Tare"
              subtitle={"0"}
              isTextInput={true}
              ref={Tareref}
              returnKeyType={"next"}
              blurOnSubmit={true}
              onSubmitEditing={() => {
                setactiveTab("Charges");
              }}
            />
            <InputTextBox
              title="Net"
              subtitle={Net.toString()}
              editable={false}
            />
          </CardContainer>

          <CardContainer color={"#fae3d9"}>
            <InputSelectBox
              click={() => {
                setactiveTab("Charges");
              }}
              title={"Charge"}
              subtitle={Charge ? Charge : "Select-One"}
            />
            <InputSelectBox
              click={() => {
                setactiveTab("Types");
              }}
              title={"Types"}
              subtitle={Type ? Type : "Select-One"}
            />
            <InputSelectBox
              click={() => {
                setactiveTab("Cashior");
              }}
              title={"Cashior"}
              subtitle={Cashior ? Cashior : "Select-One"}
            />
          </CardContainer>

          {/* Submit Container */}
          <View
            style={{
              marginBottom: 10,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AnimatedButton
              click={() => {
                console.log(getData());
                onSubmitCheck();
                // setdataModel(true);
              }}
              width={"80%"}
              color={"rgba(54, 79, 107,0.7)"}
              title={"Next"}
              textcolor={"#FFF"}
              ripple={"rgba(255,255,255,0.1)"}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
