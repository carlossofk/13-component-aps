/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { Text } from 'react-native-gesture-handler';
import { colors, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    text: string,
    safe?: boolean,
    white?: boolean
}

export const Title: FC<Props> = ({ text, safe = false, white = false }) => {
    const { top } = useSafeAreaInsets();

    return (
        <Text style={{
            ...globalStyles.title,
            marginTop: safe ? top : 0,
            marginBottom: 10,
            color: white ? 'white' : colors.text,
        }}>
            {text}
        </Text>
    );
};
