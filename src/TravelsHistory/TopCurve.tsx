import {Circle, ClipPath, Defs, Path, Rect, Svg} from "react-native-svg";
import React from "react";
import {useTheme} from "../components";
import {palette} from "../components/Theme";


interface TopCurveProps {
    footerHeight: number;
}

const TopCurve = ({ footerHeight }: TopCurveProps) => {
    const theme = useTheme();
    const size = theme.borderRadii.xl;
    return (
        <Svg
            width={size}
            height={size}
            style={{
                position: "absolute",
                right: 0,
                bottom: footerHeight
            }}
            viewBox="0 0 1 1"
        >
            <Defs>
                <ClipPath id="clip">
                    <Path d="M 0 1 A 0 1, 1, 0, 0, 1 0 L 1 1" />
                </ClipPath>
            </Defs>
            <Rect
                clipPath="url(#clip)"
                x={0}
                y={0}
                width={1}
                height={1}
                fill={palette.green}
            />
            <Circle
                cx={0.4}
                cy={0.5}
                r={0.5}
                clipPath="url(#clip)"
                fill={palette.orange}
            />
        </Svg>
    )
}

export default TopCurve
