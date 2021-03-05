import { Platform, StyleSheet, StatusBar } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1
      },
      row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch'
      },
      resultText: {
        fontSize: 25,
        paddingRight: 10,
        color: 'black'
      },
      btnText: {
        fontSize: 40,
        color: 'black'
      },
      white: {
        color: 'black'
      },
      btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
      },
      devider: {
        borderRightColor: 'yellow',
        borderBottomColor: 'yellow',
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5
      },
      result: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end'
      },
      calculation: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end'
      },
      calculationText: {
        fontSize: 50,
        paddingRight: 10,
        color: 'red'
      },
      buttons: {
        flex: 7,
        flexDirection: 'row'
      },
      numbers: {
        flex: 3,
        padding: 1,
        backgroundColor: '#92a8d1'
      },
      operations: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: '#82b74b'
      }
    });