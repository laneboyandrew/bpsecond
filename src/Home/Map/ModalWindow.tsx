import React, {useEffect, useState} from "react";
import {Modal,  Portal, Button, Provider, IconButton, Colors} from 'react-native-paper';
import {Image, Text, ScrollView, View, TouchableOpacity, Dimensions, StyleSheet} from "react-native";
import Carousel from 'react-native-snap-carousel';
import CustomCarousel from "./CustomCarousel";
import {Ionicons} from "@expo/vector-icons";
import * as Location from "expo-location";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FavouritePlaces from "../FavouritePlaces";
import {HomeNavigationProps} from "../../components/Navigation";
import {useIsFocused, useNavigation} from "@react-navigation/native";

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
            height: "115%",
        },
        iconButton: {
            top: height/15,
            alignSelf: 'flex-end',
        },
    };

const ModalWindow = ({navigateToPlace, sendDataToParent, visible, marker }: HomeNavigationProps<"ModalWindow">) => {
    const navgation = useNavigation();
    const regex = /(<([^>]+)>)|(&nbsp;)|(&nbps)/ig;
    const result = marker.description.replace(regex, ' ');
    const [favKeys, setFavKeys] = useState([]);
    const isFocused = useIsFocused();
    useEffect(() => {
        const getFavourites = async () => {
            let keys = []
            try {
                keys = await AsyncStorage.getAllKeys()
            } catch (e) {
                // read key error
            }
            try {
                let forDeletion = ['__react_native_storage_test', 'NAVIGATION_STATE_KEY-40.0.0'];
                keys = keys.filter(item => !forDeletion.includes(item))
                setFavKeys(keys)
            } catch (e) {
                // read error
            }
        }
        getFavourites();
    }, [isFocused])
    const onDismiss = () => {
        sendDataToParent(false)
    }
    const onNavigationTap = () => {
        navgation.navigate('Map', {
            destination: marker.coordinates
        });
        onDismiss();
        navigateToPlace(true, marker.coordinates);
    }
    const getFavourites = async () => {
        let keys = []
        keys = await AsyncStorage.getAllKeys()
        setFavKeys(keys);
    }
    const onHeartPress = async () => {
        const jsonValue = JSON.stringify(marker)
        try {
            if (favKeys.includes(marker.id.toString())){
                await AsyncStorage.removeItem(marker.id.toString())
                await getFavourites();
            } else {
                await AsyncStorage.setItem(marker.id.toString(), jsonValue)
                await getFavourites();
            }
        } catch (e) {
            console.log('error in onHeartPress', e)
        }
        console.log('Done.')
        //remove after test
        try {
            await AsyncStorage.removeItem('__react_native_storage_test')
        } catch(e) {
            // remove error
        }
        console.log('Done.')
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
                style={{fontFamily: "PTSerifBoldItalic", fontSize: 20, alignSelf: "center", maxWidth: '70%', marginTop: '3%', textAlign: "center"}}>{marker.title}
            </Text>
            <View style={{height: "90%"}}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginLeft: '3%', marginRight: '3%'}}>
            <CustomCarousel {...{marker}} />

                <Text style={{fontSize: 18, fontFamily: "PTSerifRegular"}}>{result}</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-around", marginLeft: "3%", marginRight: "3%", paddingBottom: "30%"}}>
                        <TouchableOpacity onPress={() => onNavigationTap()}>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <Ionicons size={height/20} name={'navigate-circle-outline'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onHeartPress()}>
                            {marker.id ?
                                <View style={{flexDirection: "row", alignItems: "center"}}>
                                    {favKeys.includes(marker.id.toString()) ? <Ionicons size={height/20} name={'heart-dislike'} /> : <Ionicons size={height/20} name={'heart'} />}
                                </View> : undefined}
                        </TouchableOpacity>
                    </View>
            </ScrollView>

            </View>

        </Modal>
    );
}

export default ModalWindow;
