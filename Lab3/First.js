import React from "react";
import { View, Text, ActivityIndicator} from "react-native";
import styles from "./styles";
import ProgressBar from "./ProgressBar";
export default function First() {
    return (
        <View style={styles.container1}>
            <Text style={styles.text1}>First Content</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
}
First.navigationOptions = ({ navigation }) => ({
    headerTitle: (
        <View style={styles.progress}>
            <Text style={styles.title}>First</Text>
            <ProgressBar 
                label={false}
                progress={navigation.state.params.progress(
                    navigation.state.routeName)}
            />
        </View>
    ),
    headerLeft: (
        <Text
            onPress={() => navigation.navigate("Third",
                navigation.state.params)}
        >
            Third
        </Text>
    ),
    headerRight: (
        <Text
            onPress={() => navigation.navigate("Second",
                navigation.state.params)}
        >
            Second
        </Text>
    )
});