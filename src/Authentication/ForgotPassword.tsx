import React from "react";
import {AuthNavigationProps} from "../components/Navigation";
import Footer from "./components/Footer";
import {Box, Button, Container, Text} from "../components";
import {useFormik} from "formik";
import * as Yup from "yup";
import TextInput from "../components/Form/TextInput";

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
});
const ForgotPassword = ({navigation}: AuthNavigationProps<"ForgotPassword">) => {
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
    } = useFormik({
        validationSchema: ForgotPasswordSchema,
        initialValues: { email: ""},
        //Здесь передавать мыло на сервак
        onSubmit: () => navigation.navigate("PasswordChanged"),
    });
    const footer = (
        <Footer title='Не работает?' action='Попробовать другой способ' onPress={() => alert("Войти чере ВК?")}/>
    );
    return (
        <Container pattern={2} footer={{...footer}}>

                <Text variant="title1" textAlign="center" marginBottom='l'>Восстановление пароля </Text>
                <Text variant="body" textAlign="center" marginBottom='l'> Введите Email к которому привязан аккаунт, мы вышлем письмо с инструкцией  </Text>

                <Box>
                    <Box marginBottom='m'>
                        <TextInput
                            icon="mail"
                            placeholder="Введите Ваш Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            error={errors.email}
                            touched={touched.email}
                            autoCapitalize="none"
                            autoCompleteType='email'
                            returnKeyType="next"
                            returnKeyLabel="next"
                            autoCorrect={false}
                            onSubmitEditing={() => handleSubmit()}
                        />
                    </Box>
                    <Box alignItems='center' marginTop='s'>
                        <Button variant='primary' onPress={handleSubmit} label='Восстановить доступ'/>
                    </Box>
                </Box>
        </Container>
    )
};

export default ForgotPassword
