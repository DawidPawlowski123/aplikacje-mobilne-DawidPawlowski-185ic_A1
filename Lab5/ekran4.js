import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import Swipeable from "./Swipeable";
export default function ekran4() {
    const [items, setItems] = useState(
        new Array(8).fill(null).map((v, id) => ({ id, name: "Swipe Me" }))
    );
    function onSwipe(id) {
        return () => {
            setItems(items.filter(item => item.id !== id));
        };
    }
    return (
        <View style={styles.container}>
            {items.map(item => (
                <Swipeable key={item.id} onSwipe={onSwipe(item.id)}
                    name={item.name} />
            ))}
        </View>
    );
}
ekran4.navigationOptions = {
    title: "ekran4"
};
