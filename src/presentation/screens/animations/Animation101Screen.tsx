/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Animated, Easing, Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { useAnimation } from '../../hooks/useAnimation';
import { ThemeContext } from '../../context/ThemeContext';

export const Animation101Screen = () => {
    const {
        animatedOpacity,
        animatedTop,

        fadeIn,
        fadeOut,
        startMovingTopPosition,
    } = useAnimation();
    const { colors } = useContext(ThemeContext);


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
                { backgroundColor: colors.primary },
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
                <Text style={{ color: colors.text }}>
                    FadeIn
                </Text>
            </Pressable>

            <Pressable
                onPress={() => fadeOut({})}
                style={{ marginTop: 10 }}
            >
                <Text style={{ color: colors.text }}>
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
        width: 150,
        height: 150,
    },
});
