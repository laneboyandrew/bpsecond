import React, {useEffect, useState} from "react";
import {Modal,  Portal, Button, Provider, IconButton, Colors} from 'react-native-paper';
import {Image, Text, ScrollView, View, TouchableOpacity, Dimensions} from "react-native";
import Carousel from 'react-native-snap-carousel';
import CustomCarousel from "./CustomCarousel";
import {Ionicons} from "@expo/vector-icons";
import * as Location from "expo-location";

interface ModalWindowProps {
    navigateToPlace: any;
    sendDataToParent: any;
    visible: boolean;
    marker: any;
}
const {width, height} = Dimensions.get("window")
const styles =
    {
        container: {
            backgroundColor: 'white',
            height: '115%',
        },
        iconButton: {
            top: '6%',
            alignSelf: 'flex-end',
        },
    };

const ModalWindow = ({navigateToPlace, sendDataToParent, visible, marker}: ModalWindowProps) => {
    const regex = /(<([^>]+)>)|(&nbsp;)|(&nbps)/ig;
    const result = marker.description.replace(regex, '');
    const onDismiss = () => {
        sendDataToParent(false)
    }
    const onNavigationTap = () => {
        onDismiss();
        navigateToPlace(true, marker.coordinates);
    }

    return (
        <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.container}>
            <IconButton
                style={
                    styles.iconButton
                }
                icon="close"
                color={Colors.black}
                size={30}
                onPress={() => onDismiss()}
            />
            <Text
                style={{fontStyle: "italic", fontSize: 20, alignSelf: "center", maxWidth: '75%'}}>{marker.title}
            </Text>
            {/*<Image style={styles.tinyLogo} source={{ uri: 'http://beautiful-places.ru/public/images/attachments/A4YIvo8_Q9k.jpg' }} />*/}

            <CustomCarousel {...{marker}} />
            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: '3%', marginLeft: '3%', marginRight: '3%'}}>
                <Text>{result}</Text>
            </ScrollView>
            <View style={{flexDirection: "row", justifyContent: "space-around", marginLeft: "3%", marginRight: "3%", marginBottom: "15%"}}>
                <TouchableOpacity onPress={() => onNavigationTap()}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        {/*<Text style={{fontSize: 20}}>Маршрут</Text>*/}
                        <Ionicons size={height/20} name={'navigate-circle-outline'} />
                    </View>
                </TouchableOpacity>
            <TouchableOpacity>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    {/*<Text style={{fontSize: 20}}> В избранное</Text>*/}
                    <Ionicons size={height/20} name={'heart'} />
                </View>
            </TouchableOpacity>
            </View>
        </Modal>
    );
}

export default ModalWindow;
