import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import styles from "./stylesekran5";
export default function ekran5() {
    const [timesPressed, setTimesPressed] = useState(0);

    let textLog = '';
    if (timesPressed > 1) {
        textLog = timesPressed + 'x Kliknięty';
    } else if (timesPressed > 0) {
        textLog = 'Kliknięty';
    }
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    setTimesPressed((current) => current + 1);
                }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'red'
                    },
                    styles.wrapperCustom
                ]}>
                {({ pressed }) => (
                    <Text style={styles.text}>
                        {pressed ? 'Kliknięty!' : 'Kliknij mnie'}
                    </Text>
                )}
            </Pressable>
            <View style={styles.logBox}>
                <Text testID="pressable_press_console">{textLog}</Text>
            </View>
        </View>
    );
}
ekran5.navigationOptions = {
    title: "ekran5"
};
