import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Button } from "@rneui/base";

import layout from "../styles/layout.js";

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={layout.container}>
      <Text style={styles.title}>
        Hi!
        <br />
        Welcome to the English World App!
      </Text>

      <View style={layout.controls}>
        <Button
          title="Sign in"
          size="lg"
          buttonStyle={layout.control}
          onPress={() => navigation.navigate("Sign In")}
        />
        <Button
          title="Sign up"
          type="outline"
          size="lg"
          buttonStyle={layout.control}
          onPress={() => navigation.navigate("Sign Up")}
        />
      </View>
      <View style={styles.footer}>
        <Image
          style={styles.imageLogo}
          source={require("../assets/logo_on.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    height: 50,
  },

  footer: {
    flex: 1,
    width: "100%",
  },

  imageLogo: {
    flex: 1,
    resizeMode: "contain",
  },
});

export default WelcomeScreen;
