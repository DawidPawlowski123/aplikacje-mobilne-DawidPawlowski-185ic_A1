import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
export default function useState({ navigation }) {
    return (
        <View style={styles.useState}>
            <Text style={styles.pojecie}>useState</Text>
            <Text style={styles.textuse}>
                Deklaruje „zmienną stanu”.
                Jest to sposób na „przechowanie” wartości 
                pomiędzy wywołaniami funkcji — useState.
                Jest nowym sposobem, na wykorzystanie dokładnie tych
                samych możliwości, jakie daje this.state w klasach.
                Jedynym argumentem, jaki przyjmuje hook useState() 
                jest początkowa wartość stanu.
            </Text>
        </View>
    );
}
useState.navigationOptions = {
    title: "useState"
};
