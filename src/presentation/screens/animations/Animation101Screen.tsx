/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { colors } from '../../../config/theme/theme';

export const Animation101Screen = () => {
    return (
        <View style={style.container}>

            <View style={[
                style.purpleBlox,
            ]} />

            <Pressable onPress={() => { }} style={{ marginTop: 10 }}>
                <Text>
                    FadeIn
                </Text>
            </Pressable>

            <Pressable onPress={() => { }} style={{ marginTop: 10 }}>
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
