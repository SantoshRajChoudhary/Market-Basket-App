import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const OrderPlaced = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.navigate("Home");
    }, 4000);
  }, []);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 20,
        backgroundColor: "#5fc342",
      }}
    >
      <AntDesign name="checkcircle" size={65} color="white" />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
          lineHeight: 40,
        }}
      >
        Hurray! Your Order Placed Succesfully
      </Text>
    </View>
  );
};

export default OrderPlaced;