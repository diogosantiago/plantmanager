import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../styles/colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import userImg from "../assets/diogo.jpeg";
import fonts from "../styles/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {
  const [userName, setUserName] = useState<string>();

  async function loadStorageName() {
    const name = await AsyncStorage.getItem("@plantmanager:user");
    setUserName(name || "");
  }
  useEffect(() => {
    loadStorageName();
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image source={userImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
});
