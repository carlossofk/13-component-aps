/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { colors, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native';

interface Props {
    text: string,
    safe?: boolean,
    backgroundColor: string
}

export const SubTitle: FC<Props> = ({ text, safe = false, backgroundColor = colors.background }) => {
    const { top } = useSafeAreaInsets();

    return (
        <Text style={{
            ...globalStyles.subTitle,
            marginTop: safe ? top : 0,
            marginBottom: 10,
            backgroundColor: backgroundColor,
        }}>
            {text}
        </Text>
    );
};


