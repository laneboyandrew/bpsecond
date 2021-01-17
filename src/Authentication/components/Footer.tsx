import React from "react";

import {Box, Text} from "../../components";
import SocialLogin from "../../Authentication/components/SocialLogin";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";


interface FooterProps {
    onPress: () => void;
    title: string;
    action: string;
}

const Footer = ({onPress, title, action}: FooterProps) => {
    return (
        <>
            <SocialLogin/>
            <TouchableWithoutFeedback {...{onPress}}>
                <Box alignItems='center' marginTop='s'>
                    <Text color="white">{`${title}`}</Text>
                    <Text color="primary"> {action} </Text>
                </Box>
            </TouchableWithoutFeedback>
        </>
    )
};
export default Footer;
