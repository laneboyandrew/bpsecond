import React, {useState} from "react";
import {BorderlessTap, Box, RoundedIcon} from "../../components";
import {View} from "react-native";


interface PictureProps {
    picture: {
        id: number;
        color: string;
        aspectRatio: number;
        selected: boolean;
    }
    width: number;
}

const Picture = ({
                     picture,
                     width
                 }: PictureProps) => {
    const [selected, setSelected] = useState(false);
    return (
        <BorderlessTap onPress={() => {
            setSelected(prev => !prev);
            picture.selected = !picture.selected;
        }}>
            <Box
                borderRadius="m"
                marginBottom='m'
                alignItems='flex-end'
                padding='m'
                style={{
                    backgroundColor: picture.color,
                    width,
                    height: width *  picture.aspectRatio
                }}
            >
                {selected && (
                    <RoundedIcon
                        backgroundColor="primary"
                        color="white"
                        size={24} name="check"
                    />
                )}
            </Box>
        </BorderlessTap>
    )
}

export default Picture
