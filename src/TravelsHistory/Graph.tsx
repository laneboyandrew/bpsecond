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
    return <Box width={width} height={height} />
}
export default Graph
