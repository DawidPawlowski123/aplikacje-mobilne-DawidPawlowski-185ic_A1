import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    backgroundColor: "grey",
  },
  
  text: {
    fontSize: 20,
    textAlign: "center"
  },

  scroll: {
    height: 1,
    alignSelf: "stretch"
  },

  scrollItem: {
    margin: 1,
    alignSelf: "center",
  }
   
});