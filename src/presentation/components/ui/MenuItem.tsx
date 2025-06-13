/* eslint-disable react-native/no-inline-styles */
import React, { FC, useContext } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Icon from '@react-native-vector-icons/ionicons';
import { Separator } from './Separator';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    name: string,
    icon: string,
    component: string

    isFirst?: boolean
    isLast?: boolean
}

type iconType = React.ComponentProps<typeof Icon>['name']

export const MenuItem: FC<Props> = ({ name, icon, component, isFirst = false, isLast = false }) => {

    const { colors } = useContext(ThemeContext);
    const navigation = useNavigation<any>();

    return (
        <>
            <Pressable
                onPress={() => navigation.navigate(component)}
            >
                <View style={{
                    ...style.container,
                    backgroundColor: colors.cardBackground,
                    ...(isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10 }),
                    ...(isLast && { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingBottom: 10 }),
                }}>
                    <Icon name={icon as iconType} size={35} style={{ marginRight: 10 }} color={colors.primary} />
                    <Text style={{ color: colors.text }}>{name}</Text>
                    <Icon name={'chevron-forward-outline'} size={35} style={{ marginLeft: 'auto', color: colors.primary }} />
                </View>
            </Pressable>
            {!isLast && (<Separator />)}
        </>

    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

