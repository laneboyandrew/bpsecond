import React from "react";
import {Routes, StackNavigationProps} from "../components/Navigation";
import {Box, Container, Text, Button, CloseButton} from "../components";
import {Feather as Icon} from "@expo/vector-icons";

const SIZE = 80;

const PasswordChanged = ({navigation}: StackNavigationProps<Routes, "PasswordChanged">) => {
    return (
        <Container pattern={0} footer={<Box marginTop='m' flexDirection='row' justifyContent='center'>
            <CloseButton onPress={() => navigation.pop()}/>
        </Box>
        }>
            <Box flex={1} justifyContent='center' alignItems='center'>
            <Box backgroundColor='primaryLight'
                 style={{ height: SIZE, width: SIZE, borderRadius: SIZE/2}}
                 justifyContent='center'
                 alignItems='center'>
                <Text color='primary' textAlign='center'>
                    <Icon name="check" size={32} />
                </Text>

            </Box>
            <Text variant="title1" textAlign="center" marginBottom='l'>Письмо отправлено!</Text>
            <Text variant="body" textAlign="center" marginBottom='l'> Мы отправили письмо с инструкциями по смене пароля Вам на электронную почту
            </Text>
            <Box alignItems='center' marginTop='m'>
                <Button
                    variant="primary"
                    onPress={() => navigation.navigate("Login")}
                    label="Вернуться к авторизации"/>
            </Box>
            </Box>
        </Container>
    )
};

export default PasswordChanged
