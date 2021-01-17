import React from "react";
import {Routes, StackNavigationProps} from "../components/Navigation";
import Footer from "./components/Footer";
import {Box, Button, Container, Text} from "../components";
import {useFormik} from "formik";
import * as Yup from "yup";
import TextInput from "./Form/TextInput";

interface ForgotPasswordProps {

}
const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
});
const ForgotPassword = ({navigation}: StackNavigationProps<Routes, "ForgotPassword">) => {
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue
    } = useFormik({
        validationSchema: ForgotPasswordSchema,
        initialValues: { email: ""},
        //Здесь передавать мыло на сервак
        onSubmit: (values) => console.log(values),
    });
    const footer = (
        <Footer title='Не работает?' action='Попробовать другой способ' onPress={() => alert("Войти чере ВК?")}/>
    );
    return (
        <Container footer={{...footer}}>

            <Box padding="xl" justifyContent='center' flex={1}>
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
            </Box>
        </Container>
    )
};

export default ForgotPassword
