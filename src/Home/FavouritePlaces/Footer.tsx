import React from "react";
import {Box, Button} from "../../components";
import {useSafeAreaInsets} from "react-native-safe-area-context";

interface FooterProps {
    label: string;
    onPress: () => void;
}
const Footer = ({ label, onPress }: FooterProps) => {
    const insets = useSafeAreaInsets();
    return (
        <Box backgroundColor="secondary" padding='m' borderTopLeftRadius='xl'>
            <Box alignItems="center"  style={{ paddingBottom: insets.bottom }}>
            <Button variant="primary" {...{ label, onPress }}/>
            </Box>
        </Box>
    )
}

export default Footer;
