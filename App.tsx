import React from "react";
import "./config/firebase";
import RootNavigation from "./navigation";
import { ThemeProvider, Button } from "react-native-elements";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lexend-Bold": require("./assets/fonts/Lexend-Bold.ttf"),
  });
  return (
    // <ThemeProvider>
    <RootNavigation />
    // </ThemeProvider>
  );
}
