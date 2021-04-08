import React from "react";
import { View } from "react-native";
import styles from "./stylesekran3";
import Button from "./Button";
export default function ekran3({ navigation }) {
    return (
        <View style={styles.container}>
        <Button onPress={() => {}} label="Opacity" />
        <Button onPress={() => {}} label="Highlight" touchable="highlight" />
        </View>
        );
}
ekran3.navigationOptions = {
    title: "ekran3"
};
