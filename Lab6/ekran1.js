import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Image, Text, Slider } from "react-native";
import styles from "./styles";

export default function ekran1({ reactSource, relaySource }) {
  const source = require("./images/komp.png");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  return (
    <View style={styles.container}>
    <Image
          style={styles.image}
          source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}
        />
      <Image style={{width, height}} source={source} />
      <Image style={{width, height}} source={relaySource} />
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
      <Slider
        style={styles.slider}
        minimumValue={50}
        maximumValue={150}
        value={width}
        onValueChange={value => {
          setWidth(value);
          setHeight(value);
        }}
      />
    </View>
  );
}

const sourceProp = PropTypes.oneOfType([
  PropTypes.shape({
    uri: PropTypes.string.isRequired
  }),
  PropTypes.number
]).isRequired;

ekran1.propTypes = {
  reactSource: sourceProp,
  relaySource: sourceProp
};

ekran1.defaultProps = {
  reactSource: {
    uri: "https://img.redro.pl/naklejki/ikona-komputera-stacjonarnego-z-kolekcji-urzadzenia-elektroniczne-400-148803439.jpg"
  },
  relaySource: require("./images/kosz.jpg")
};
ekran1.navigationOptions = {
    title: "Ekran1"
};
