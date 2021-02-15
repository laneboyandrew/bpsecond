import React from "react";
import {Box} from "../../components";
import {View} from "react-native";


interface PictureProps {
    picture: {
        id: number;
        color: string;
        aspectRatio: number;
    }
    width: number;
}

const Picture = ({
                     picture: {color: backgroundColor, aspectRatio},
                     width
                 }: PictureProps) => {
    return (
        <Box borderRadius="m" marginBottom='m' style={{ backgroundColor, width, height: width * aspectRatio }}/>
    )
}

export default Picture
