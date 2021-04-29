import React from "react";
import {Modal, Text, Portal, Button, Provider, IconButton, Colors} from 'react-native-paper';
import {ScrollView, View} from "react-native";

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
        }
    };

const ModalWindow = ({sendDataToParent, visible, marker}: ModalWindowProps) => {
    const onDismiss = () => {
        sendDataToParent(false)
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
                    <Text style={{fontStyle: "italic", fontSize: 20, alignSelf: "center", maxWidth: '75%' }}>{marker.title}</Text>
                    <ScrollView style={{ marginTop:'7%', marginLeft:'3%', marginRight: '3%' }}>

                    <Text>{marker.description}</Text>
                    </ScrollView>
                </Modal>
    );
}

export default ModalWindow;
