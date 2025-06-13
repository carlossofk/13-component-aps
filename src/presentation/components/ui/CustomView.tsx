import React, { FC, ReactNode } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';

interface Props {
    style?: StyleProp<ViewStyle>
    children?: ReactNode;
    margin?: boolean;
}

export const CustomView: FC<Props> = ({ style, children, margin = false }) => {
    return (
        <View style={[
            globalStyles.mainContainer,
            margin ? globalStyles.globalMargin : null,
            style,
        ]}>
            {children}
        </View>
    );
};
