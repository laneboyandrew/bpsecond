import React from "react";
import {AuthenticationRoutes, StackNavigationProps} from "../components/Navigation";
import {Box, Container, Text, Button, RoundedIconButton, RoundedIcon} from "../components";

const SIZE = 80;

const PasswordChanged = ({navigation}: StackNavigationProps<AuthenticationRoutes, "PasswordChanged">) => {
    return (
        <Container pattern={0} footer={<Box marginTop='m' flexDirection='row' justifyContent='center'>
            <RoundedIconButton backgroundColor='background' color='secondary' name='x' size={60}
                               onPress={() => navigation.pop()}/>
        </Box>
        }>
            <Box alignSelf='center'>
                <RoundedIcon name='check' size={SIZE} color='primary' backgroundColor='primaryLight'/>
            </Box>
                <Text variant="title1" textAlign="center" marginVertical='m'>Письмо отправлено!</Text>
                <Text variant="body" textAlign="center" marginBottom='l'> Мы отправили письмо с инструкциями по смене
                    пароля Вам на электронную почту
                </Text>
                <Box alignItems='center' marginTop='m'>
                    <Button
                        variant="primary"
                        onPress={() => navigation.navigate("Login")}
                        label="Вернуться к авторизации"/>
                </Box>
        </Container>
    )
};

export default PasswordChanged
