import React, { useState } from 'react';
import { View, Button, Platform, Text, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./styleDate";


export default function ekran4({ navigation }) {



    const [date, setDate] = useState(new Date(1598051730000));
    const [time, setTime] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedValue) => {
        setShow(Platform.OS === 'ios');
        if (mode == 'date') {
            const currentDate = selectedValue || new Date();
            setDate(currentDate);
            setMode('time');
            setShow(Platform.OS !== 'ios');
        } else {
            const selectedTime = selectedValue || new Date();
            setTime(selectedTime);
            setShow(Platform.OS === 'ios');
            setMode('date');
        }
    };
    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Termin",
      `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`,

      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={showDatepicker}>
                <View>
                    <Button color="#82b74b" onPress={showDatepicker} title="Wyświetl kalendarz" />
                </View>
                <View style={styles.button}>
                    <Button color="#6b5b95"  onPress={showTimepicker} title="Wyświetl zegar" />
                </View>
                <Text style={{ fontSize: 50, color: "red" }}>{formatDate(date, time)}</Text>
                <Button color="#d64161" title={"Wyświetl termin"} onPress={createTwoButtonAlert} />
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID='dateTimePicker'
                    timeZoneOffsetInMinutes={0}
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChange}
                />
            )}
        </View>

    );
}
const formatDate = (date, time) => {
    var data = `${date.getDate()}/${date.getMonth() +
        1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
    return data;
}
ekran4.navigationOptions = {
    title: "Ekran4"
};