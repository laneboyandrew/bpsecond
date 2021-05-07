import React, { useState, useCallback, useRef } from 'react';
import {Text, View, SafeAreaView, Image, Dimensions} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {all} from "@shopify/restyle";

const {width, height} = Dimensions.get("window");

const CustomCarousel = (marker) => {
    const array = Object.values(marker);
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState(array);
    const ref = useRef(null);

    const renderItem = useCallback(({ item, index }) => (
                    <Image style={{
                        marginTop: "3%",
                        borderRadius: 5,
                        height: "90%",
                        width: "90%",
                        padding: 50,
                        alignSelf: "center",

                    }} source={{uri:item.image}}/>
    ), []);
    {
        console.log("IMAGE", array[0].images)
    }
    return (
        <SafeAreaView style={{ marginTop: "8%", height: "30%" }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Carousel
                    layout="default"
                    ref={ref}
                    data={array[0].images}
                    sliderWidth={width}
                    itemWidth={width/1.3}
                    renderItem={renderItem}
                    onSnapToItem={(index) => setActiveIndex(index)}
                />
            </View>
        </SafeAreaView>
    );
};

export default CustomCarousel;
