import React from "react";
import {View} from "react-native";
import {Box, Container, Text, Button} from "../../components";
import SocialLogin from "../components/SocialLogin";
import TextInput from "../../components/Form/TextInput";
import CheckBox from "../../components/Form/CheckBox";
import {Formik} from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),

    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const footer = (
    <>
        <SocialLogin/>
        <Box alignItems="center">
            <Button variant='transparent' onPress={() => alert("sign UP!")}>
                <Text color="white">Нет аккаунта?</Text>
                <Text color="primary"> Зарегистрироваться </Text>
            </Button>
        </Box>
    </>
);
const Login = () => {
    return (
        <Container footer={{...footer}}>

            <Box padding="xl">
                <Text variant="title1" textAlign="center" marginBottom='l'>Добро пожаловать! </Text>
                <Text variant="body" textAlign="center" marginBottom='l'> Используйте Email с паролем чтобы войти или
                    войдите с помощью ВКонтакте </Text>
                <Formik
                    initialValues={{email: '', password: '', remember: true }}
                    onSubmit={values => console.log(values)}
                    validationSchema={LoginSchema}
                >
                    {({handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue}) => (
                        <Box>
                            <Box marginBottom='m'>
                                <TextInput
                                            icon="mail"
                                           placeholder="Введите Ваш Email"
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            error={errors.email}
                                            touched={touched.email}
                                />
                            </Box>
                            <TextInput
                                       icon="lock"
                                       placeholder="Введите Ваш пароль"
                                       onChangeText={handleChange('password')}
                                       onBlur={handleBlur('password')}
                                       error={errors.password}
                                       touched={touched.password}
                            />

                            <Box flexDirection="row" justifyContent="space-between">
                                <CheckBox
                                    label="Запомнить меня"
                                    defaultValue={values.remember}
                                    checked={values.remember}
                                    onChange={() => setFieldValue("remember", !values.remember)}
                                />
                                <Button variant="transparent" onPress={() => true}>
                                    <Text color="primary" marginRight='xl'>Не помню пароль</Text>
                                </Button>
                            </Box>
                            <Box alignItems='center' marginTop='s'>
                                <Button variant='primary' onPress={handleSubmit} label='Войти'/>
                            </Box>
                        </Box>
                    )}
                </Formik>
            </Box>
        </Container>
    )
};
export default Login
