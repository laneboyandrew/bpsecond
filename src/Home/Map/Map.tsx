import React, {useEffect, useState} from 'react';
import {
    Dimensions,
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';

import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapView from "react-native-map-clustering";

import MapViewDirections from 'react-native-maps-directions';
import {HomeNavigationProps} from "../../components/Navigation";
import * as Location from "expo-location";
import ModalWindow from "./ModalWindow";
import {StatusBar} from "expo-status-bar";

const GOOGLE_MAPS_APIKEY = 'AIzaSyBljbCUNGItJWUcyTVmXbLFL4eg4i-RuTw';

const initialMarker = {
    title: 'Выберите любой маркер на карте',
    description: 'Вам станет доступно описание места'
}
const Map = ({navigation}: HomeNavigationProps<"Map">) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [satellite, setSatellite] = useState(false);
    const [showModalWindow, setShowModalWindow] = useState(false);
    const [currentMarker, setCurrentMarker] = useState(initialMarker);
    const [navigationDestination, setCurrentNavigationDestination] = useState(null);
    const [currentUserLocation, setCurrentUserLocation] = useState(null);
    const [navigate, setNavigate] = useState(false);
    const onMarkerPress = (marker) => {
        setShowModalWindow(true);
        setCurrentMarker(marker);
    }
    const sendDataToParent = (index) => { // the callback. Use a better name
        setShowModalWindow(index);
    };
    const navigateToPlace = (index, coordinates) => {
        setNavigate(index);
        setCurrentNavigationDestination(coordinates);
    }
    useEffect(() => {
        (async () => {

            let {status} = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            const location = await Location.getCurrentPositionAsync({})
            setCurrentUserLocation(location);
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
            {satellite ? <StatusBar style="light" /> : <StatusBar style="black" /> }
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
                {currentUserLocation && navigate ?
                    <MapViewDirections
                        origin={{latitude: currentUserLocation.coords.latitude, longitude: currentUserLocation.coords.longitude}}
                        destination={navigationDestination}
                        apikey={GOOGLE_MAPS_APIKEY}
                        language={'ru'}
                        strokeWidth={3}
                        strokeColor="hotpink"
                        precision={"high"}
                    /> : undefined}

                {data.map(marker => {
                    const latitude = parseFloat(marker.coordinates.latitude)
                    const longitude = parseFloat(marker.coordinates.longitude)
                    return (
                        <Marker
                            onPress={
                                () => onMarkerPress(marker)
                            }
                            coordinate={
                                {latitude, longitude}
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
            <ModalWindow navigateToPlace={navigateToPlace} sendDataToParent={sendDataToParent} visible={showModalWindow}
                         marker={currentMarker}/>
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

