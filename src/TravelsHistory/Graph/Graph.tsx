import React from "react";
import {View, Dimensions} from "react-native"
import {Box, useTheme} from "../../components";
import {Theme} from "../../components/Theme";
import Underlay, {MARGIN} from "./Underlay";
import {lerp} from "./Scale";
const {width: wWidth} = Dimensions.get("window");
const aspectRatio = 195 / 305;

export interface DataPoint {
    date: number;
    value: number;
    color: keyof Theme["colors"]
}

interface GraphProps {
    data: DataPoint[];
}



const Graph = ({data}: GraphProps) => {
    const theme = useTheme()
    const canvasWidth = wWidth - theme.spacing.m * 2;
    const canvasHeight = canvasWidth * aspectRatio;
    const width = canvasWidth - theme.spacing[MARGIN];
    const height = canvasHeight - theme.spacing[MARGIN];
    const step = width / data.length;
    const values = data.map((p) => p.value)
    const dates = data.map((p) => p.date)
    const minX = Math.min(...dates);
    const maxX = Math.max(...dates);
    const minY = Math.min(...values);
    const maxY = Math.max(...values);

    return (
        <Box
            marginTop='xl'
            paddingBottom={MARGIN}
            paddingLeft={MARGIN}
        >
            <Underlay minY={minY} maxY={maxY} dates={dates} step={step}/>
            <Box width={width} height={height}>
                {
                    data.map((point, i) => {
                        if (point.value === 0) {
                            return null;
                        }
                        return (
                            <Box
                                key={point.date}
                                position="absolute"
                                left={i * step}
                                bottom={0}
                                width={step}
                                height={lerp(0, height, point.value / maxY)}
                            >
                                <Box
                                    backgroundColor={point.color}
                                    position="absolute"
                                    opacity={0.1}
                                    top={0}
                                    bottom={0}
                                    borderTopLeftRadius='m'
                                    borderTopRightRadius='m'
                                    left={4}
                                    right={4}
                                />
                                <Box
                                    backgroundColor={point.color}
                                    position="absolute"
                                    top={0}
                                    height={32}
                                    left={4}
                                    right={4}
                                    borderRadius='m'
                                />
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}
export default Graph