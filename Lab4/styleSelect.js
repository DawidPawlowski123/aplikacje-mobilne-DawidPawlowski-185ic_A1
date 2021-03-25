import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#80ced6",
        
    },

    pickerHeight: {
        height: 300
    },

    pickerContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 40,
        backgroundColor: "white",
        padding: 6,
        height: 240
    },

    pickerLabel: {
        fontSize: 16,
        fontWeight: "bold"
    },

    picker: {
        width: 100,
        backgroundColor: "white"
    },

    selection: {
        
        marginTop: 400,
        textAlign: "center"
    }
});