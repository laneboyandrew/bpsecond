import React from "react";
import {Modal, Portal, Text, Button, Provider, Text as PaperText} from 'react-native-paper';
import {View} from "react-native";

interface ModalWindowProps {
    sendDataToParent: any;
    visible: boolean;
}

const containerStyle = {backgroundColor: 'white', padding: 320};

const ModalWindow = ({sendDataToParent, visible}: ModalWindowProps) => {
    const onDismiss = () => {
        sendDataToParent(false)
    }
    return (
        <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
            <PaperText>Example Modal. Click outside this area to dismiss.</PaperText>
        </Modal>
    );
}

export default ModalWindow;
