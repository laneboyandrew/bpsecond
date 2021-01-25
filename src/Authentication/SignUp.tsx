import React, {useRef} from "react";
import {Box, Container, Text, Button} from "../components";
import TextInput from "../components/Form/TextInput";
import { useFormik} from 'formik';
import * as Yup from 'yup';
import Footer from "./components/Footer";
import {AuthenticationRoutes, AuthNavigationProps, StackNavigationProps} from "../components/Navigation";

const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),

    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    passwordConf: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
        .required('Required')
});




const SignUp = ({navigation}: AuthNavigationProps <"SignUp">) => {
    const password = useRef<typeof TextInput>(null);
    const passwordConf = useRef<typeof TextInput>(null);
    const footer = (
        <Footer title='Уже зарегистрированы?' action='Войти' onPress={() => navigation.navigate('Login')}/>
    );
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
    } = useFormik({
        validationSchema: SignUpSchema,
        initialValues: { email:"", password:"", passwordConf:"" },
        onSubmit: (values) => console.log(values),
    });
    return (
        <Container pattern={1} footer={{...footer}}>

                <Text variant="title1" textAlign="center" marginBottom='l'>Добро пожаловать! </Text>
                <Text variant="body" textAlign="center" marginBottom='l'> Введите Email на который мы сможем выслать
                    письмо с подтверждением или войдите с помощью ВКонтакте </Text>

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
                    <Box marginBottom='m'>
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
                               returnKeyType="next"
                               returnKeyLabel="next"
                               onSubmitEditing={() => passwordConf.current?.focus()}
                               autoCorrect={false}
                    />
                    </Box>
                    <TextInput ref = {passwordConf}
                               icon="lock"
                               placeholder="Подтвердите Ваш пароль"
                               onChangeText={handleChange('passwordConf')}
                               onBlur={handleBlur('passwordConf')}
                               error={errors.passwordConf}
                               touched={touched.passwordConf}
                               secureTextEntry
                               autoCompleteType='password'
                               autoCapitalize="none"
                               returnKeyType="go"
                               returnKeyLabel="go"
                               onSubmitEditing={() => handleSubmit()}
                               autoCorrect={false}
                    />


                    <Box alignItems='center' marginTop='l'>
                        <Button variant='primary' onPress={handleSubmit} label='Зарегистрироваться'/>
                    </Box>
                </Box>

        </Container>
    )
};
export default SignUp
