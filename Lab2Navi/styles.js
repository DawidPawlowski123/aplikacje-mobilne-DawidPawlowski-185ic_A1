import { StyleSheet } from "react-native";
import useState from "./useState";

export default StyleSheet.create({
  spread_operator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    padding: 30,

    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: 0 }
    })
  },
  rest_parameter : {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    padding: 10,

    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: 0 }
    })
  },
  useState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    padding: 20,

    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: 0 }
    })
  },
  textspread: {
    color: '#D81F1F',
    fontStyle: 'italic',
    fontSize: 15,
  },
  pojecie: {
    color: 'white',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  textrest: {
    color: '#C1B837',
    fontSize: 20,
  },
  textuse:{
    color: '#71CDBA',
    fontSize: 18,
    marginTop: 200,
    marginBottom: 200,
  }
});