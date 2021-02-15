import React from "react";
import RoundedIcon, {RoundedIconProps} from "./RoundedIcon";
import {BorderlessButton} from "react-native-gesture-handler";

interface RoundedIconButtonProps extends RoundedIconProps{
    onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }:
                               RoundedIconButtonProps) => {
    return (
        <BorderlessButton{...{ onPress }}>
            <RoundedIcon {...props}/>
        </BorderlessButton>
    )
};
    RoundedIconButton.defaultProps = {
        iconRatio: 0.7
    };

export default RoundedIconButton
