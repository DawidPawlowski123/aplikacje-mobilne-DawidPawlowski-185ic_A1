import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
export default function rest_parameters({ navigation }) {
    return (
        <View style={styles.rest_parameter}>
            <Text style={styles.pojecie}>Spread operator</Text>
            <Text style={styles.textrest}>
            Pozwala funkcji na przyjmowanie nieokreślonej liczby 
            argumentów jako tablicy, zapewniając sposób reprezentowania
            funkcji o zmiennej liczbie argumentów w JavaScript.
            </Text>
        </View>
    );
}
rest_parameters.navigationOptions = {
    title: "Rest parameters"
};
