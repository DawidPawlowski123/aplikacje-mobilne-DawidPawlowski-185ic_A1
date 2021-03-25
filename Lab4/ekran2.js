import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styleSelect";
import Select from "./select";

export default function ekran2({ navigation }) {
    const [sizes, setSizes] = useState([
        { label: "", value: null },
        { label: "S", value: "S" },
        { label: "M", value: "M" },
        { label: "L", value: "L" },
        { label: "XL", value: "XL" }
    ]);
    const [garments, setGarments] = useState([
        { label: "", value: null, sizes: ["S", "M", "L", "XL"] },
        { label: "Skarpetki", value: 1, sizes: ["S", "L"] },
        { label: "Koszulka", value: 2, sizes: ["M", "XL"] },
        { label: "Spodnie", value: 3, sizes: ["S", "L"] },
        { label: "Czapka", value: 4, sizes: ["M", "XL"] }
    ]);
    const [availableGarments, setAvailableGarments] = useState([]);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedGarment, setSelectedGarment] = useState(null);
    const [selection, setSelection] = useState("");

    return (
        <View style={styles.container}>
            <Select 
                label="Rozmiar"
                items={sizes}
                selectedValue={selectedSize}
                onValueChange={size => {
                    setSelectedSize(size);
                    setSelectedGarment(null);
                    setAvailableGarments(garments.filter(i =>
                        i.sizes.includes(size)));
                }}
            />
            <Select 
                label="Ubrania"
                items={availableGarments}
                selectedValue={selectedGarment}
                onValueChange={garment => {
                    setSelectedGarment(garment);
                    setSelection(
                        `${selectedSize} ${garments.find(i => i.value ===
                            garment).label}`
                    );
                }}
            />
            <Text style={styles.selection}>{selection}</Text>
        </View>
    );
}
ekran2.navigationOptions = {
    title: "Ekran2"
};
