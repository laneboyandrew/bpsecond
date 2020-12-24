import React from "react";
import {View, Text, StyleSheet, Button, Dimensions} from 'react-native';
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        width,
        justifyContent: "center",
        alignItems: "center",
        padding: 44,

    },
    subtitle: {
        fontFamily: "SFProText-Semibold",
        fontSize: 24,
        lineHeight: 30,
        marginBottom: 12,
        color: "#0C0D34",
        textAlign: "center"
    },
    description: {
        fontFamily: "SFProText-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 40
    }
})
interface SubslideProps {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;
}

const Subslide = ({subtitle, description, last, onPress} :SubslideProps) => {
    return (
       <View style={styles.container}>
           <Text style={styles.subtitle}>{subtitle}</Text>
           <Text style={styles.description}>{description}</Text>
           <Button title={ last? "Вперёд" : "Дальше"} variant={last ? "primary" : "default"} {...{ onPress }}/>
       </View>
    )
}

export default Subslide;