import React, { useState } from "react";
import { View, Text, Image, Slider } from "react-native";
import styles from "./styles";

export default function ekran2() {
  const source = require("./images/pobrane.png");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  return (
    <View style={styles.container}>
      <Image source={source} style={{ width, height }} />
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
      <Slider
        style={styles.slider}
        minimumValue={50}
        maximumValue={400}
        value={width}
        onValueChange={value => {
          setWidth(value);
          setHeight(value);
        }}
      />
    </View>
  );
}
ekran2.navigationOptions = {
    title: "Ekran2"
};