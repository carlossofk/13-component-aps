import React, { FC, useContext } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Switch, Text } from 'react-native-gesture-handler';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    isOn: boolean,
    text?: string,

    onChange: (value: boolean) => void
}

export const CustomSwitch: FC<Props> = ({ isOn, text, onChange }) => {
    const { colors } = useContext(ThemeContext);

    return (
        <View style={styles.switchRow}>
            {text && (<Text style={{ color: colors.text }}>{text}</Text>)}
            <Switch
                thumbColor={Platform.OS === 'android' ? colors.primary : ''}
                ios_backgroundColor="#3E3E3E"
                onValueChange={onChange}
                value={isOn}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
});
