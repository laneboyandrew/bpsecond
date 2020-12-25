import React from "react";
import {View, StyleSheet, Dimensions} from 'react-native';
import { Button, Text } from "../../components"
const { width } = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        width,
        justifyContent: "center",
        alignItems: "center",
        padding: 44,

    },
    subtitle: {

        marginBottom: 12,
        color: "#0C0D34",
        textAlign: "center"
    },
    description: {

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
           <Text variant="title2" style={styles.subtitle}>{subtitle}</Text>
           <Text variant="body" style={styles.description}>{description}</Text>
           <Button label={ last? "Вперёд" : "Дальше"} variant={last ? "primary" : "default"} {...{ onPress }}/>
       </View>
    )
}

export default Subslide;