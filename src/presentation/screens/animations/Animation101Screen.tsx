/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Animated, Easing, Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';

export const Animation101Screen = () => {
    const {
        animatedOpacity,
        animatedTop,

        fadeIn,
        fadeOut,
        startMovingTopPosition,
    } = useAnimation();


    return (
        <View style={style.container}>

            <Animated.View style={[
                style.purpleBlox,
                {
                    opacity: animatedOpacity,
                    transform: [{
                        translateY: animatedTop,
                    }],
                },
            ]} />

            <Pressable
                onPress={() => {
                    fadeIn({});
                    startMovingTopPosition({
                        initialPosition: -100,
                        easing: Easing.elastic(1),
                        duration: 750,
                    });
                }}
                style={{ marginTop: 10 }}
            >
                <Text>
                    FadeIn
                </Text>
            </Pressable>

            <Pressable
                onPress={() => fadeOut({})}
                style={{ marginTop: 10 }}
            >
                <Text>
                    FaseOut
                </Text>
            </Pressable>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    purpleBlox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    },
});
