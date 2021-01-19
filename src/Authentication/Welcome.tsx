import React from "react";
import {Dimensions, Image} from "react-native";
import {Box, Text, useTheme} from "../components";
import Button from "../components/Button";
import {Routes, StackNavigationProps} from "../components/Navigation";

const {width, height} = Dimensions.get("window");
const picture = {
    src: require("../../assets/introduceImages/5.png")
};

export const assets = [picture.src];
const Welcome = ({navigation}: StackNavigationProps<Routes, "Welcome">) => {
    const theme = useTheme();
    return (
        <Box flex={1} backgroundColor="white">
            <Box flex={1} borderBottomRightRadius="xl" backgroundColor="slide.grey" alignItems="center" justifyContent="flexEnd">
                <Image source={picture.src}
                       style={{
                           width: width,
                           height: height / 1.6
                       }}/>
            </Box>
            <Box flex={1} borderTopLeftRadius="xl">
                <Box backgroundColor="grey" position="absolute" top={0} left={0} right={0} bottom={0} />
                <Box backgroundColor="white" borderTopLeftRadius="xl" justifyContent="space-evenly" alignItems="center" flex={1} padding="xl">
                    <Text variant="title2">
                    Давайте начнём
                    </Text>
                    <Text variant="body" textAlign="center">
                        Войдите в Ваш аккаунт или зарегистрируйтесь
                    </Text>
                    <Button variant="primary" label="Уже зарегистрированы? Войти" onPress={() => navigation.navigate('Login')}/>
                    <Button variant="default" label="Зарегистрироваться" onPress={() => navigation.navigate('SignUp')}/>
                    <Button variant="vkontakte" label="Войти с помощью ВКонтакте" />
                </Box>
            </Box>
        </Box>
    )
}

export default Welcome
