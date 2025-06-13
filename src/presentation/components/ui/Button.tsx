import React, { FC } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { colors, globalStyles } from '../../../config/theme/theme';

interface Props {
    text: string;
    styles?: StyleProp<ViewStyle>

    onPress: () => void
}

export const Button: FC<Props> = ({ text, styles, onPress }) => {
    return (

        <Pressable
            style={({ pressed }) => ([
                globalStyles.btnPrimary,
                {
                    opacity: pressed ? 0.8 : 1,
                    backgroundColor: colors.primary,
                },
                styles,
            ])}
            onPress={onPress}
        >
            <Text style={[
                globalStyles.btnPrimaryText,
                {
                    color: colors.buttonTextColor,
                },
            ]}>
                {text}
            </Text>
        </Pressable>
    );
};
