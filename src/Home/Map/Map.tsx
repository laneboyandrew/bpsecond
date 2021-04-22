import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    Text,
    View,
    StyleSheet,
    Image,
    Button,
    Linking,
    Platform
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {HomeNavigationProps} from "../../components/Navigation";
import * as Location from "expo-location";
import Modal from 'react-native-modal'
import Constants from 'expo-constants'
import IntentLauncher from 'react-native-intent-launcher'
import {Box, Header, RoundedIconButton} from "../../components";
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
            { data: 'package:' + pkg },
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
const Map = ({navigation}: HomeNavigationProps<"Map">) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [locationModalVisible, setLocationModalVisible] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);
    const [satellite, setSatellite] = useState(false);

    useEffect(() => {
        (async () => {

                let { status } = await Location.requestPermissionsAsync();
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
        <Box flex={1} backgroundColor="background">
            <Header
                title="Карта"
                left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
                right={{ icon: 'map', onPress: () => setSatellite((prev) => !prev) }}
            />
                <MapView
                    mapType={satellite?"hybrid":"standard"}
                    style={styles.map}
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

                       return (<Marker
                            coordinate={
                          marker.coordinates
                        }
                            title={marker.title}
                            description={marker.description}
                           >
                               {
                                   marker.type == "mountains" ? <Image style={{height: 35, width:35 }} source={require('../../../assets/images/mountain.png')}/> :
                                  marker.type == "ponds" ? <Image style={{height: 35, width:35 }} source={require('../../../assets/images/pond.png')}/> :
                                      marker.type == "beach" ? <Image style={{height: 35, width:35 }} source={require('../../../assets/images/beach.png')}/> :
                                          marker.type == "architecture" ? <Image style={{height: 35, width:35 }} source={require('../../../assets/images/architecture.png')}/> :
                                              marker.type == "forest" ? <Image style={{height: 35, width:35 }} source={require('../../../assets/images/forest.png')}/> :
                                                  marker.type == "abandoned" ? <Image style={{height: 35, width:35 }} source={require('../../../assets/images/abandoned.png')}/> :
                                                      marker.type == "caves" ? <Image style={{height: 35, width:35 }} source={require('../../../assets/images/cave.png')}/> :
                                                          marker.type == "careers" ? <Image style={{height: 35, width:35 }} source={require('../../../assets/images/career.png')}/> :
                                                          marker.type == "waterfall" ? <Image style={{height: 35, width:35 }} source={require('../../../assets/images/waterfall.png')}/> :
                                                              <View><Text> LOL </Text></View>
                                  }
                       </Marker>
                       )
                    })}

                </MapView>
        </Box>
    );
};

export default Map;
