import React, { useState } from "react";
import { Text, View } from "react-native";
import Notification from "./Notification";
import styles from "./styleEkran5";
import Activity from "./Activity";



export default function ekran5({ navigation }) {

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [promise, setPromise] = useState(Promise.resolve());

    function onPress() {
        setPromise(
            new Promise(resolve => setTimeout(resolve, 3000)).then(() => {
                setFetching(false);
            })
        );
        setFetching(true);
    }

    return (
        <View style={styles.container}>

            <Notification message={message} />
            <Text
                onPress={() => {
                    setCount(count + 1);
                    setMessage(null);
                }}
            >
                Naciśnij  {count}
            </Text>
            <Text
                onPress={() => {
                    setMessage("Witaj coś się wydarzyło!");
                }}
            >
                Pokaż powiadomienie
 </Text>
            <View style={styles.containerModal}>
                <Activity visible={fetching} />
                <Text onPress={onPress}>Załaduj...</Text>
            </View>
        </View>

    );
}

ekran5.navigationOptions = {
    title: "Ekran5"
};
