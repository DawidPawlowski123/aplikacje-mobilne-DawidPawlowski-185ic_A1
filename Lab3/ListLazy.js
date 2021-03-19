import React from "react";
import PropTypes from "prop-types";
import { Text, FlatList } from "react-native";
import styles from "./styles";
export default function ListLazy({ data, fetchItems }) {
    return (
        <FlatList style={styles.lazy}
            data={data}
            renderItem={({ item }) => <Text
                style={styles.item}>{item.value}</Text>}
            onMomentumScrollEnd={fetchItems}
        />
    );
}
ListLazy.propTypes = {
    data: PropTypes.array.isRequired,
    fetchItems: PropTypes.func.isRequired
};