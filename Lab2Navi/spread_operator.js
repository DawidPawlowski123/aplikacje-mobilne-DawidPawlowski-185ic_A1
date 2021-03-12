import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
export default function spread_operator({ navigation }) {
    return (
        <View style={styles.spread_operator}>
            <Text style={styles.pojecie}>Spread operator</Text>
            <Text style={styles.textspread}>
                Umożliwia rozwinięcie iterowalnych elementów,
                takich jak wyrażenie tablicowe lub ciąg znaków,
                w miejscach, w których oczekuje się zera lub większej
                liczby argumentów (w przypadku wywołań funkcji)
                lub elementów (w przypadku literałów tablicowych)
                lub rozwinięcie wyrażenia obiektowego w miejscach,
                w których jest zero lub więcej par klucz-wartość
                (dla literałów obiektów).
            </Text>
        </View>
    );
}
spread_operator.navigationOptions = {
    title: "Spread operator"
};

