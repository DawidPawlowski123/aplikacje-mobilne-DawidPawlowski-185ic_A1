import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";

const data = new Array(100)
    .fill(null)
    .map((v, i) => ({ key: i.toString(), value: `Item ${i}` }));

export default function ekran1({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Text
                    style={styles.item}>{item.value}</Text>}
            />
        </View>
    );
}
ekran1.navigationOptions = {
    title: "Ekran1"
};

