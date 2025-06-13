/* eslint-disable react-native/no-inline-styles */
import React, { FC, useContext } from 'react';
import { globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    text: string,
    safe?: boolean,
    backgroundColor?: string
}

export const SubTitle: FC<Props> = ({ text, safe = false, backgroundColor }) => {
    const { top } = useSafeAreaInsets();
    const { colors } = useContext(ThemeContext);

    return (
        <Text style={{
            ...globalStyles.subTitle,
            marginTop: safe ? top : 0,
            marginBottom: 10,
            backgroundColor: backgroundColor ? backgroundColor : colors.background,
            color: colors.text,
        }}>
            {text}
        </Text>
    );
};


