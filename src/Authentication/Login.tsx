import React, {useRef} from "react";
import {Box, Container, Text, Button} from "../components";
import TextInput from "../components/Form/TextInput";
import CheckBox from "../components/Form/CheckBox";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Footer from "./components/Footer";
import {AuthNavigationProps} from "../components/Navigation";
import {BorderlessButton} from "react-native-gesture-handler";
import {CommonActions} from "@react-navigation/native";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),

    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const Login = ({navigation}: AuthNavigationProps<"Login">) => {
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
        initialValues: {email: "", password: "", remember: true},
        onSubmit: () =>
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{name: 'Home'}]
                })
            ),
    });
    return (
        <Container pattern={0} footer={{...footer}}>

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
                <TextInput ref={password}
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
                           autoCorrect={false}
                />

                <Box flexDirection="row" justifyContent="space-between" marginVertical='s' alignItems='center'>
                    <CheckBox
                        label="Запомнить меня"
                        defaultValue={values.remember}
                        checked={values.remember}
                        onChange={() => setFieldValue("remember", !values.remember)}
                    />
                    <BorderlessButton onPress={() => navigation.navigate('ForgotPassword')}
                                      style={{marginLeft: 25}}>
                        <Text variant="button" color="primary" marginRight='xl'>Не помню пароль</Text>
                    </BorderlessButton>
                </Box>
                <Box alignItems='center' marginTop='s'>
                    <Button variant='primary' onPress={handleSubmit} label='Войти'/>
                </Box>
            </Box>
        </Container>
    )
};
export default Login
