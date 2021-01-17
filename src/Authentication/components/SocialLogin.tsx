import React from "react";
import {Box} from "../../components";
import {Dimensions} from "react-native";
import Button from "../../components/Button";

const {height} = Dimensions.get('window');
const SocialLogin = () => {
    return (
        <Box>
            <Box alignItems="center" justifyContent="center" style={{marginTop: height/10}}>
               <Button variant="vkontakte" label="Войти с помощью ВКонтакте" />
            </Box>
        </Box>
    )
}

export default SocialLogin;
