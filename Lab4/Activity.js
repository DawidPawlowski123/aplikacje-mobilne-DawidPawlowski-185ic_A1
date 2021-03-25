import React from "react";
import PropTypes from "prop-types";
import { View, Modal, ActivityIndicator } from "react-native";
import styles from "./styleEkran5";
export default function Activity(props) {
    return (
        <Modal visible={props.visible} transparent>
            <View style={styles.modalContainer}>
                <ActivityIndicator color="red" size={props.size} />
            </View>
        </Modal>
    );
}
Activity.propTypes = {
    visible: PropTypes.bool.isRequired,
    size: PropTypes.string.isRequired
};
Activity.defaultProps = {
    visible: false,
    size: "large"
};
