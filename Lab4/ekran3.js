import React, { useState } from "react";
import { View, Modal, Text, Button } from "react-native";
import styles from "./styleSwitch";
import Switch from "./Switch";

const min = 0;
const max = 1000;

export default function ekran3({ navigation }) {

    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                animationType={'fade'}
                transparent={false}
                visible={showModal}
            
            >
                <View style={styles.modalInner}>
                    <Text style={styles.text}>Oto pseudolosowa liczba od 0 do 1000!</Text>
                    <Text>{(Math.floor(Math.random() * (max - min)) + min)}</Text>
                    <Switch
                        label="Kliknij aby zamknac modal"
                        onValueChange={() => {
                            setShowModal(!showModal);
                        }}
                    />
                </View>
            </Modal>
            <Switch
                label="Kliknij w switch aby wywolac modal"
                onValueChange={() => {
                    setShowModal(!showModal);
                }}
            />
        </View>
    );
}
ekran3.navigationOptions = {
    title: "Ekran3"
};
