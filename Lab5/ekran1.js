import React from "react";
import {
    Text,
    ScrollView,
    ActivityIndicator,
    Switch,
    View
} from "react-native";
import styles from "./styles";
export default function ekran1() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                {new Array(20).fill(null).map((v, i) => (
                    <View key={i}>
                        <Text style={[styles.scrollItem, styles.text]}>Switch {i+1}</Text>
                        <ActivityIndicator style={styles.scrollItem} size="large" />
                        <Switch style={styles.scrollItem} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
ekran1.navigationOptions = {
    title: "ekran1"
};