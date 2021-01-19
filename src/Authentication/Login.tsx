import React, {useRef} from "react";
import {Box, Container, Text, Button} from "../components";
import TextInput from "../components/Form/TextInput";
import CheckBox from "../components/Form/CheckBox";
import { useFormik} from 'formik';
import * as Yup from 'yup';
import Footer from "./components/Footer";
import {Routes, StackNavigationProps} from "../components/Navigation";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),

    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});



const Login = ({navigation}: StackNavigationProps<Routes, "Login">) => {
    const password = useRef<typeof TextInput>(null);
    const footer = (
        <Footer title='Нет аккаунта?' action='Зарегистрироваться' onPress={() => navigation.navigate('SignUp')}/>
        );
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue
    } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: "", password:"", remember: true},
        onSubmit: (values) => console.log(values),
    });
    return (
        <Container pattern={0} footer={{...footer}}>

            <Box padding="xl">
                <Text variant="title1" textAlign="center" marginBottom='l'>Добро пожаловать! </Text>
                <Text variant="body" textAlign="center" marginBottom='l'> Используйте Email с паролем чтобы войти или
                    войдите с помощью ВКонтакте </Text>
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
                                            onSubmitEditing={() => password.current?.focus()}
                                />
                            </Box>
                            <TextInput ref = {password}
                                       icon="lock"
                                       placeholder="Введите Ваш пароль"
                                       onChangeText={handleChange('password')}
                                       onBlur={handleBlur('password')}
                                       error={errors.password}
                                       touched={touched.password}
                                       secureTextEntry
                                       autoCompleteType='password'
                                       autoCapitalize="none"
                                       returnKeyType="go"
                                       returnKeyLabel="go"
                                       onSubmitEditing={() => handleSubmit()}
                                       autoCorrect={false}


                            />

                            <Box flexDirection="row" justifyContent="space-between">
                                <CheckBox
                                    label="Запомнить меня"
                                    defaultValue={values.remember}
                                    checked={values.remember}
                                    onChange={() => setFieldValue("remember", !values.remember)}
                                />
                                <Button variant="transparent" onPress={() => navigation.navigate('ForgotPassword')}>
                                    <Text color="primary" marginRight='xl'>Не помню пароль</Text>
                                </Button>
                            </Box>
                            <Box alignItems='center' marginTop='s'>
                                <Button variant='primary' onPress={handleSubmit} label='Войти'/>
                            </Box>
                        </Box>
            </Box>
        </Container>
    )
};
export default Login
