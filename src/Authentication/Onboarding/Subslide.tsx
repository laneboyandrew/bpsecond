import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import Animated from "react-native-reanimated";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44
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