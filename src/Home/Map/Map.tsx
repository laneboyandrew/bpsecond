import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Dimensions, FlatList, Text, View, StyleSheet, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {HomeNavigationProps} from "../../components/Navigation";


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

    useEffect(() => {
        fetch('http://beautiful-places.ru/api/places')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.container}>
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 53.227200,
                        longitude: 50.243698,
                        latitudeDelta: 3,
                        longitudeDelta: 3,

                    }}

         >
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

                                                              <View><Text> LOL </Text></View>
                                  }
                       </Marker>
                       )
                    })}
                </MapView>
        </View>
    );
};

export default Map;
