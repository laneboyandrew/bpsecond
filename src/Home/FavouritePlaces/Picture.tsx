import React, {useState} from "react";
import {BorderlessTap, Box, RoundedIcon} from "../../components";
import {Text, ImageBackground} from "react-native";


interface PictureProps {
    place: {
        id: number;
        color: string;
        aspectRatio: number;
        selected: boolean;
        images: string;
    }
    width: number;
}

const Picture = ({
                     place,
                     width
                 }: PictureProps) => {
    const [selected, setSelected] = useState(false);
    return (
        <BorderlessTap onPress={() => {
            setSelected(prev => !prev);
            place.selected = !place.selected;
        }}>
            <Text>{place.description}</Text>
            <ImageBackground style={{borderRadius: '3%', marginBottom: '3%', alignItems: 'flex-end', padding: '3%', width, height: width  * Math.floor(Math.random() * 11)}} source={{ uri: place.images }}>
            {/*<Box*/}
            {/*    borderRadius="m"*/}
            {/*    marginBottom='m'*/}
            {/*    alignItems='flex-end'*/}
            {/*    padding='m'*/}
            {/*    style={{*/}
            {/*        backgroundColor: picture.color,*/}
            {/*        width,*/}
            {/*        height: width *  picture.aspectRatio*/}
            {/*    }}*/}
            {/*>*/}
                {selected && (
                    <RoundedIcon
                        backgroundColor="primary"
                        color="background"
                        size={24} name="check"
                    />
                )}
            </ImageBackground>
        </BorderlessTap>
    )
}

export default Picture
