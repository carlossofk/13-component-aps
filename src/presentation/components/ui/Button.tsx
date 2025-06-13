import React, { FC, useContext } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    text: string;
    styles?: StyleProp<ViewStyle>

    onPress: () => void
}

export const Button: FC<Props> = ({ text, styles, onPress }) => {
    const { colors } = useContext(ThemeContext);

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
