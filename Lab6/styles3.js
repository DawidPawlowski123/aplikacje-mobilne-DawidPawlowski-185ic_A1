import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite"
  },

  button: {
    padding: 10,
    margin: 5,
    backgroundColor: "azure",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "slategrey"
  },

  buttonText: {
    color: "slategrey"
  },
  picker: {
    height: 200,
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