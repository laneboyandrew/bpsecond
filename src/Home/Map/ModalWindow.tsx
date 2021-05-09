import React from "react";
import {Modal,  Portal, Button, Provider, IconButton, Colors} from 'react-native-paper';
import {Image, Text, ScrollView, View} from "react-native";
import Carousel from 'react-native-snap-carousel';
import CustomCarousel from "./CustomCarousel";

interface ModalWindowProps {
    sendDataToParent: any;
    visible: boolean;
    marker: any;
}

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

const ModalWindow = ({sendDataToParent, visible, marker}: ModalWindowProps) => {
    const onDismiss = () => {
        sendDataToParent(false)
    }
    const regex = /(<([^>]+)>)|(&nbsp;)|(&nbps)/ig;
    const result = marker.description.replace(regex, '');
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
            {console.log(marker)}
            {/*<Image style={styles.tinyLogo} source={{ uri: 'http://beautiful-places.ru/public/images/attachments/A4YIvo8_Q9k.jpg' }} />*/}

            <CustomCarousel {...{marker}} />
            <ScrollView style={{marginTop: '7%', marginLeft: '3%', marginRight: '3%'}}>
                <Text>{result}</Text>
            </ScrollView>
        </Modal>
    );
}

export default ModalWindow;
