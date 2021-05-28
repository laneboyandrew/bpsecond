import React, {useState} from "react";
import {BorderlessTap, Box, RoundedIcon} from "../../components";
import {Text, View} from "react-native";
import {date} from "yup";
import {useNavigation} from "@react-navigation/native";
import ModalWindow from "../Map/ModalWindow";
import {Image} from "react-native-expo-image-cache";


interface PictureProps {
    place: {
        id: number;
        color: string;
        aspectRatio: number;
        selected: boolean;
        images: string;
    }
    width: number;
    height: number;
    sendStartProcessToParent: (info) => void;
}

const Picture = ({
                     place,
                     width,
                     height,
                     sendStartProcessToParent
                 }: PictureProps) => {
    const navigation = useNavigation();
    const info = JSON.parse(place[1])
    const preview = { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" };

    // console.log('currentInfo', info.images[0].image)

     return (
                <BorderlessTap onPress={() =>
                    sendStartProcessToParent(info)
        }>
            <Image
                style={{ borderRadius: 10,  width: width/0.9, height: height/4}}
                            {...{uri: info.images[0].image, preview}}>
            </Image>
                    <Text style={{ maxWidth: width/0.9, minHeight: height/12, alignSelf: "center", textAlign: "center"}}>{info.title}</Text>
        </BorderlessTap>

    )
}

export default Picture
