import React, { FC, ReactNode, useContext } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    style?: StyleProp<ViewStyle>
    children?: ReactNode;
    margin?: boolean;
}

export const CustomView: FC<Props> = ({ style, children, margin = false }) => {
    const { colors } = useContext(ThemeContext);

    return (
        <View style={[
            globalStyles.mainContainer,
            margin ? globalStyles.globalMargin : null,
            { backgroundColor: colors.background },
            style,
        ]}>
            {children}
        </View>
    );
};
