import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    zIndex: -1,
  },

  controls: {
    flex: 3,
    width: "60%",
    maxWidth: 400,
  },

  control: {
    marginTop: 10,
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: "#fff",
    backgroundColor: "#D54826FF",
  },
});
