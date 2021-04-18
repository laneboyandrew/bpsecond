import React from "react";
import {Box, Text} from "../../components";
import {ScrollView} from "react-native";
import CheckBoxGroup from "./CheckBoxGroup";
import TextInput from "../../components/Form/TextInput";

const PersonalInfo = () => {
    return (
        <ScrollView>
            <Box padding="m">
                <Text variant="body">Об аккаунте</Text>
                <Box marginBottom='m'>
                    <TextInput
                        icon="user"
                        placeholder="Имя"
                        autoCapitalize="none"
                        autoCompleteType='name'
                    />
                </Box>
                <Box marginBottom='m'>
                    <TextInput
                        icon="lock"
                        placeholder="Введите Ваш пароль"
                        secureTextEntry
                        autoCompleteType='password'
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </Box>
                <Box marginBottom='m'>
                    <TextInput
                        icon="map-pin"
                        placeholder="Регион"
                        autoCapitalize="none"
                        autoCompleteType='street-address'
                    />
                </Box>
            </Box>
        </ScrollView>
    )
}

export default PersonalInfo
