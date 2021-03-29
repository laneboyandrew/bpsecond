import React, {Children, ReactNode, useState} from "react";
import {Box, Text} from "../../components";
import {RectButton} from "react-native-gesture-handler";
import {Dimensions, View} from "react-native";
import {useTransition} from "react-native-redash/lib/module/v1";
import {useTheme} from "@shopify/restyle";
import Animated from "react-native-reanimated";
import {mix} from "react-native-redash";

const {width} = Dimensions.get("window");

interface Tab {
    id: string,
    label: string;
}

interface TabsProps {
    tabs: Tab[];
    children: ReactNode;
}

const Tabs = ({ tabs, children }: TabsProps) => {
    const theme = useTheme();
    const [index, setIndex] = useState(0);
    const transition = useTransition(index);
    const translateX = mix(transition, width * 0.25, width * 0.75);
    return (
        <Box flex={1}>
            <Box flexDirection="row">
                {tabs.map((tab, i) => (
                    <RectButton style={{flex: 1}} key={i} onPress={() => setIndex(i)}>
                        <Box padding="m" style={{paddingBottom: theme.spacing.m + 10}}>
                            <Text variant="title3" textAlign="center">
                                {tab.label}
                            </Text>
                        </Box>
                    </RectButton>
                ))}
                <Animated.View style={{
                    position: "absolute",
                    bottom: 0,
                    left: -5,
                    backgroundColor: theme.colors.primary,
                    width: 10,
                    height: 10,
                    borderRadius: 5
                }}/>
                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    backgroundColor="primary"
                    width={10}
                    height={10}
                    style={{borderRadius: 5}}
                />
            </Box>
            <Animated.View style={{ width: width * tabs.length, flexDirection: "row" }}>
                {Children.map(children, (child, index) => (
                    <Box flex={1} key={index} width={width}>{child}</Box>
                ))}
            </Animated.View>
        </Box>
    )
}

export default Tabs;
