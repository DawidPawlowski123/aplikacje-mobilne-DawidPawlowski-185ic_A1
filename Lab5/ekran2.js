import React from "react";
import {
    Text,
    ScrollView,
    ActivityIndicator,
    Button,
    View,
    Alert,
} from "react-native";
import styles from "./stylesekran2";
export default function ekran2() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                {new Array(20).fill(null).map((v, i) => (
                    <View style={styles.row} key={i}>
                        <Text style={[styles.scrollItem, styles.text]}>Przycisk {i+1}</Text>
                        <ActivityIndicator style={styles.scrollItem} size="large" />
                        <Button 
                        style={styles.button} 
                        color="#588c7e"  
                        onPress={() => Alert.alert('Kliknołeś w przycisk')}
                        title="Kliknij">

                        </Button>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
ekran2.navigationOptions = {
    title: "ekran2"
};
