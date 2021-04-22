import React from "react";
import {Dimensions} from "react-native";
import {Box, Header, Text} from "../../components";
import {DrawerActions} from "@react-navigation/native";
import {HomeNavigationProps} from "../../components/Navigation";
import DrawerItem from "../Drawer/DrawerItem";

import {useTheme} from "@shopify/restyle";
import Tabs from './Tabs';
import Configuration from "./Configuration";
import PersonalInfo from "./PersonalInfo";
const {width} = Dimensions.get("window");
const tabs = [
    { id: "configuration", label: "Предпочтения" },
    { id: "info", label: "Личная информация"}
]
const EditProfile = ({navigation}: HomeNavigationProps<"EditProfile">) => {
    const theme = useTheme();
    return (
        <Box flex={1} backgroundColor="transparent">
            <Box flex={0.2}
                 backgroundColor="background"
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    borderBottomRightRadius='xl'
                    backgroundColor='secondary'
                >
                    <Header
                        title='Редактирование профиля'
                        left={{icon: 'menu', onPress: () => navigation.dispatch(DrawerActions.openDrawer)}}
                        dark
                    />

                </Box>
            </Box>
            <Box marginVertical="m" style={{ marginTop: 50 + theme.spacing.m }}>
                <Box
                    position="absolute"
                    top={-50}
                    left={width / 2 - 50}
                    right={0}
                    backgroundColor='primary'
                    style={{borderRadius: 50}}
                    width={100}
                    height={100}
                />

                <Box marginVertical='l'>
                    <Text marginTop='l' variant='title1' textAlign='center'>Andrey</Text>
                    <Text variant='body' textAlign='center'>andrejgrach@icloud.com</Text>
                </Box>
            </Box>
            <Tabs tabs={tabs}>
                <Configuration />
                <PersonalInfo />
            </Tabs>
        </Box>
    )
}

export default EditProfile;
