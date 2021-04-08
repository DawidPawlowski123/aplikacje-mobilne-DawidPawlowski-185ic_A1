import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    paddingTop: 80,
    backgroundColor: "#622569",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 20,
    marginRight: 60,
  },

  scroll: {
    height: 1,
    alignSelf: "stretch"
  },

  scrollItem: {
    margin: 3,
  },
  button: {
    color: "red",
    borderBottomColor: '#737373',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "slategrey"
    
  },
   
});