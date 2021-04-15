import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    backgroundColor: "ghostwhite"
  },

  picker: {
    height: 100,
    width: 200,
    marginTop: 20
  },

  icons: {
    alignSelf: "stretch"
  },

  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },

  itemIcon: {
    padding: 10,
    color: "slategrey"
  },

  itemText: {
    color: "slategrey"
  }
});