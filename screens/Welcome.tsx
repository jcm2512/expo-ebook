import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Button } from "@rneui/base";

import { LinearGradient } from "expo-linear-gradient";

import layout from "../styles/layout.js";

import { backgroundColors } from "../styles/globals.js";
const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={layout.container}>
      <LinearGradient colors={backgroundColors} style={layout.background} />
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{`English World`}</Text>
          <Text style={styles.title}>{`ONLINE`}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate("Sign In")}
          buttonStyle={{
            backgroundColor: "#3F444B",
            borderRadius: 30,
          }}
          containerStyle={{
            marginHorizontal: 60,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: "bold" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 3,
  },
  title: { alignSelf: "center", fontFamily: "Lexend-Bold", fontSize: 40 },
  titleContainer: { marginTop: 150 },

  footer: {
    flex: 1,
    width: "100%",
    // alignContent: "center",
  },

  imageLogo: {
    flex: 1,
    resizeMode: "contain",
    alignSelf: "center",
    width: "100%",
  },
});

export default WelcomeScreen;
