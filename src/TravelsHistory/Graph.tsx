import React from "react";
import { View, Dimensions } from "react-native"
import {Box, useTheme} from "../components";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195/305;

interface Point {
    date: number;
    value: number;
}
interface GraphProps {
    data: Point[];
}

const Graph = ({data}: GraphProps) => {
    const theme = useTheme()
    const width = wWidth - theme.spacing.m * 2;
    const height = width * aspectRatio;
    const step = width / data.length;
    const values = data.map((p) => p.value)
    const dates = data.map((p) => p.date)
    const minX = Math.min(...dates);
    const maxX = Math.min(...dates);
    const minY = Math.min(...dates);
    const maxY = Math.min(...dates);
    const lerp = (v0: number, v1: number, t: number) => (1 - t) * v0 + t * v1;

    return (
        <Box width={width} height={height}>
            {
                data.map((point, i) => {
                    if (point.value === 0){
                        return null;
                    }
                    return (
                        <Box
                            key={point.date}
                            position="absolute"
                            left={i * step}
                            bottom={0}
                            width={step}
                            height={lerp(0, height, point.value / height)}
                            backgroundColor="primary"
                        />
                    )
                })
            }
        </Box>
    )
}
export default Graph
