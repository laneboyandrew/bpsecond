import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    Text,
    View,
    StyleSheet,
    Image,
    Linking,
    Platform
} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {HomeNavigationProps} from "../../components/Navigation";
import * as Location from "expo-location";
import Constants from 'expo-constants'
import IntentLauncher from 'react-native-intent-launcher'
import {Modal, Portal, Text as PaperText, Button, Provider} from 'react-native-paper';

import {Box, Header, RoundedIconButton} from "../../components";
import TransparentHeader from "../../components/TransparentHeader";
import ModalWindow from "./ModalWindow";

const GOOGLE_MAPS_APIKEY = 'AIzaSyBljbCUNGItJWUcyTVmXbLFL4eg4i-RuTw';
const pkg = Constants.manifest.releaseChannel
    ? Constants.manifest.android.package
    : 'host.exp.exponent'

const openAppSettings = () => {
    if (Platform.OS === 'ios') {
        Linking.openURL('app-settings:')
    } else {
        IntentLauncher.startActivityAsync(
            IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
            {data: 'package:' + pkg},
        )
    }
}
const coordinates = () => [
    {
        latitude: 37.3317876,
        longitude: -122.0054812,
    },
    {
        latitude: 37.771707,
        longitude: -122.4053769,
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
const initialMarker = {
    title: 'Выберите любой маркер на карте',
    description: 'Вам станет доступно описание места'
}
const Map = ({navigation}: HomeNavigationProps<"Map">) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [locationModalVisible, setLocationModalVisible] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);
    const [satellite, setSatellite] = useState(false);
    const [showModalWindow, setShowModalWindow] = useState(false);
    const [currentMarker, setCurrentMarker] = useState(initialMarker);

    const onMarkerPress = (marker) => {
        setShowModalWindow(true);
        setCurrentMarker(marker);
    }
    const sendDataToParent = (index) => { // the callback. Use a better name
        setShowModalWindow(index);
    };

    useEffect(() => {
        (async () => {

            let {status} = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
        })();
        if (errorMsg) {
            console.log(errorMsg);
        }

        fetch('http://beautiful-places.ru/api/places')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{flex: 1}}>
            <MapView
                mapType={satellite ? "hybrid" : "standard"}
                style={{flex: 1}}
                showsUserLocation={true}
                followsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 53.227200,
                    longitude: 50.243698,
                    latitudeDelta: 3,
                    longitudeDelta: 3,

                }}

            >

                <MapViewDirections
                    origin={{latitude: 53.821992, longitude: 49.085842}}
                    destination={{latitude: 53.416363, longitude: 50.012238}}
                    apikey={GOOGLE_MAPS_APIKEY}
                    language={'ru'}
                    strokeWidth={3}
                    strokeColor="hotpink"
                    precision={"high"}
                />

                {data.map(marker => {
                    return (
                        <Marker
                            onPress={
                                () => onMarkerPress(marker)
                            }
                            coordinate={
                                marker.coordinates
                            }
                        >
                            {
                                marker.type == "mountains" ? <Image style={{height: 35, width: 35}}
                                                                    source={require('../../../assets/images/mountain.png')}/> :
                                    marker.type == "ponds" ? <Image style={{height: 35, width: 35}}
                                                                    source={require('../../../assets/images/pond.png')}/> :
                                        marker.type == "beach" ? <Image style={{height: 35, width: 35}}
                                                                        source={require('../../../assets/images/beach.png')}/> :
                                            marker.type == "architecture" ? <Image style={{height: 35, width: 35}}
                                                                                   source={require('../../../assets/images/architecture.png')}/> :
                                                marker.type == "forest" ? <Image style={{height: 35, width: 35}}
                                                                                 source={require('../../../assets/images/forest.png')}/> :
                                                    marker.type == "abandoned" ? <Image style={{height: 35, width: 35}}
                                                                                        source={require('../../../assets/images/abandoned.png')}/> :
                                                        marker.type == "caves" ? <Image style={{height: 35, width: 35}}
                                                                                        source={require('../../../assets/images/cave.png')}/> :
                                                            marker.type == "careers" ?
                                                                <Image style={{height: 35, width: 35}}
                                                                       source={require('../../../assets/images/career.png')}/> :
                                                                marker.type == "waterfall" ?
                                                                    <Image style={{height: 35, width: 35}}
                                                                           source={require('../../../assets/images/waterfall.png')}/> :
                                                                    <View><Text> LOL </Text></View>
                            }

                        </Marker>


                    )
                })}
            </MapView>


            <IconButton
                style={{
                    position: 'absolute',
                    top: '5%',
                    alignSelf: 'flex-end'
                }}
                icon="satellite-variant"
                color={satellite ? Colors.white : Colors.black}
                size={30}
                onPress={() => setSatellite((prev) => !prev)}
            />
            <ModalWindow sendDataToParent={sendDataToParent} visible={showModalWindow} marker={currentMarker}/>

            <IconButton
                style={{
                    position: 'absolute',
                    top: '5%',
                    alignSelf: 'flex-start'
                }}
                icon="menu"
                color={satellite ? Colors.white : Colors.black}
                size={30}
                onPress={() => navigation.openDrawer()}
            />
        </View>
    );
};

export default Map;

